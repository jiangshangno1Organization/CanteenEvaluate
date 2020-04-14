package cn.resturant.controller;

import cn.resturant.dao.*;
import cn.resturant.entity.*;
import cn.resturant.entity.dto.EvaluateDto;
import cn.resturant.entity.dto.FoodSelectDto;
import cn.resturant.entity.dto.Foodlist;
import cn.resturant.service.FoodService;
import cn.resturant.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Resource
    UserService userService;
    @Resource
    SellerMapper sellerMapper;
    @Resource
    CookerMapper cookerMapper;
    @Resource
    CommentsMapper commentsMapper;
    @Resource
    CookermainMapper cookermainMapper;
    @Resource
    FoodService foodService;
    @Resource
    FoodMapper foodMapper;
    @RequestMapping("/login")//登陆
    public boolean logins(User user){
        return userService.login(user);
    }
    @RequestMapping("/getuser")//获取所有服务者
    public List<Sellerex>getuser(){
        return sellerMapper.selectall();
    }
   @RequestMapping("/getcooker")//获取所有厨师
    public List<Cookerex>getcooker(){
        return cookerMapper.selectall();
   }
   @RequestMapping(value = "/evaulatsell",method = RequestMethod.POST)//评价厨师
    public boolean evaulatsell(@RequestBody EvaluateDto evaluateDto){
        return userService.evaulatsell(evaluateDto);
   }
   @RequestMapping("/getcookerorsecomm")//获取厨师或服务员评价列表接口
    public List<Commentex>getcookercomm(int id,int typeid){
         Map<String,Object>map=new HashMap<>();
         map.put("typeid",typeid);
         map.put("id",id);
        return commentsMapper.selectcookorsecomm(map) ;
   }
   @RequestMapping(value = "/updatefoodstyle",method = RequestMethod.POST)
    public boolean updatefood(@RequestBody FoodSelectDto foodSelectDto){
        return userService.updatefoodstyle(foodSelectDto);
   }
   @RequestMapping("/getallfood")//维护端获取所有食物
    public List<Foodlist>getallfood(){
        List<Foodlist>list=foodMapper.selectallfoods();
        for(int i=0;i<list.size();i++){
            list.get(i).setAvgs(Double.parseDouble(String.format("%.1f", list.get(i).getAvgs())));
        }
        return list;
   }
   @RequestMapping(value = "/deltoormofood",method = RequestMethod.POST)
    public boolean update(int typeid){
        return userService.updatefoodto(typeid);
   }
   @RequestMapping(value = "/addfood",method = RequestMethod.POST)
    public boolean add(Food food){
        return false;
   }
    @RequestMapping(value = "/addfoodphoto",method = RequestMethod.POST)
    public String add(@RequestParam("foodphoto") MultipartFile file, HttpServletRequest request, HttpServletResponse response)  {
        String dataName="";
        if(file.getOriginalFilename() != null && !file.getOriginalFilename().equals("")) {
            if (file.getOriginalFilename().substring((file.getOriginalFilename().lastIndexOf(".")) + 1).equals("jpg")) {
                dataName = new SimpleDateFormat("yyyyMMdd").format(new Date()) + "" + System.currentTimeMillis() + ".jpg";
                String path=request.getSession().getServletContext().getRealPath("/images/foodsPic")+dataName;
                File file1=new File(path);
                //String path = request.getSession().getServletContext().getRealPath("/images/" +dataName);
                //file.transferTo(Paths.get(path));
//                File pfile = new File(path);
//                if (!pfile.exists()) {
//                    pfile.mkdirs();
//                }
//                File file1=new File(pfile,path);
//                try{
//                    file.transferTo(file1);
//                }catch (Exception e){
//                    return "上传失败";
//                }
                try{
                    file.transferTo(file1);
                }catch (Exception e){
                    return "false";
                }

            }
        }
        return "images/foodsPic/"+dataName ;
    }
    @RequestMapping(value = "/addfood",method = RequestMethod.PUT)
    public boolean addfood(@RequestBody Food food){
        int m=foodMapper.insertSelective(food);
        if(m>0){
            return true;
        }
        return false;

    }
    @RequestMapping(value = "/updatefood",method = RequestMethod.POST)
    public boolean updatefood(@RequestBody Food food){
        try{
            int m=foodMapper.updateByPrimaryKeySelective(food);
        }catch (Exception e){
            return false;
        }

        return true;
    }
    @RequestMapping(value = "/delfood",method = RequestMethod.POST)
    public boolean delfood(@RequestBody Food food){
        int m=0;
        try{
             m=foodMapper.deleteByPrimaryKey(food.getId());
        }
        catch (Exception e){
            return false;
        }
        if(m>0){
            return true;
        }
        return false;
    }
    @RequestMapping("/yuce")
    public List<Foodex> yuce(){
        return foodService.getfood();
    }
    @RequestMapping("/getpro")
    public String get(HttpServletRequest request){
        System.out.println(request.getContextPath()+"*****");
        return request.getContextPath();
    }
    @RequestMapping(value = "/addcooker",method = RequestMethod.PUT)
    public boolean addcook(@RequestBody Cookerex cooker){
        int m=cookerMapper.insertSelective(cooker);
        System.out.println(cooker.getId());
        Cookermain cookermain=new Cookermain();
        cookermain.setCookid(cooker.getId());
        cookermain.setJianjie(cooker.getJianjie());
        int n=cookermainMapper.insertSelective(cookermain);
        if(m>0){
            return true;
        }
        return false;

    }
    @RequestMapping(value = "/addseller",method = RequestMethod.PUT)
    public boolean addcook(@RequestBody Seller seller){
        int m=sellerMapper.insertSelective(seller);
        if(m>0){
            return true;
        }
        return false;
    }
    @RequestMapping(value = "/updatecooker",method = RequestMethod.POST)
    public boolean updatefood(@RequestBody Cookerex cooker){
        Cookermain cookermain=cookermainMapper.selectByPrimaryKey(cooker.getId());
        if(cookermain!=null){
            cookermain.setJianjie(cooker.getJianjie());
            try{
                int n=cookermainMapper.updateByPrimaryKeySelective(cookermain);
            }catch (Exception e){
                return false;
            }

        }
        try{
            int m=cookerMapper.updateByPrimaryKeySelective(cooker);
        }catch (Exception e){
            return false;
        }

        return true;
    }
    @RequestMapping(value = "/updateseller",method = RequestMethod.POST)
    public boolean updatefood(@RequestBody Seller seller){
        try{
            int m=sellerMapper.updateByPrimaryKeySelective(seller);
        }catch (Exception e){
            return false;
        }

        return true;
    }
    @RequestMapping(value = "/delcooker",method = RequestMethod.POST)
    public boolean delcooker(@RequestBody Cooker cooker){
        int m=0;
        try{
            m=cookerMapper.deleteByPrimaryKey(cooker.getId());
            int n=cookerMapper.deleteex(cooker.getId());
        }
        catch (Exception e){
            return false;
        }
        if(m>0){
            return true;
        }
        return false;
    }
    @RequestMapping(value = "/delseller")
    public boolean delfood(@RequestBody Seller seller){
        int m=0;
        try{
            m=sellerMapper.deleteByPrimaryKey(seller.getId());
        }
        catch (Exception e){
            return false;
        }
        if(m>0){
            return true;
        }
        return false;
    }


}
