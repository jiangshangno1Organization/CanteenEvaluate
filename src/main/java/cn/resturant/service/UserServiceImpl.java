package cn.resturant.service;

import cn.resturant.dao.UserMapper;
import cn.resturant.entity.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    UserMapper userMapper;
    @Override
    public boolean login(User user) {
        boolean flag=false;
        User user1=userMapper.login(user);
        if(user1!=null){
            flag=true;
        }
        return flag;
    }
}
