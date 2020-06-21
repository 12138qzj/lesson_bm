package org.getdata;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.hibernate.Query;
import org.hibernate.Session;
import org.util.HibernateSessionFactory;

import Login_register.login;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

//import Login_register.login;
//import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class Login  implements Controller{
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
	
		System.out.println("登入的web服务,更换信息");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		System.out.println("登入的web服务,数据出赎回"+request.getReader());
		
		String read=Json.SetJson(request.getReader());
		System.out.println("read,数据出赎回"+read);
		JSONObject jsonObj = new JSONObject();
		
		
		JSONObject json;
		Boolean a=false;
		String username=null;
		try {	
			json= JSONObject.fromObject(read);
		    System.out.println("客户端的Json数据1"+json);
		    
		    String params=json.getString("params");
		    json=JSONObject.fromObject(params);
		    System.out.println("客户端的Json数据2"+json);    
		    username=json.getString("username");
		    String password=json.getString("password");
		    int type=Integer.parseInt(json.getString("type"));
		    System.out.println("客户端的用户"+username+" --- "+password);
		    a=login.getLogin(username, password,type);
		}catch(Exception e) {
			e.printStackTrace();
		}	
		if(a) {
			if(username.equals("Username")) {
				jsonObj.put("state", 2);
				jsonObj.put("username",username);
				response.getWriter().append(jsonObj.toString());
			}else {
				jsonObj.put("state", 1);
				jsonObj.put("username",username);
				response.getWriter().append(jsonObj.toString());
			}
		}else {
			jsonObj.put("state", 0);
			jsonObj.put("username",username);
			response.getWriter().append(jsonObj.toString());
		}
		
		return null;
	}
}
			
