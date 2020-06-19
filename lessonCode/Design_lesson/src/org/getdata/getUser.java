package org.getdata;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import Login_register.login;
import common.GetTable;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class getUser implements Controller{
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
	
		System.out.println("登入的web服务,更换信息");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		JSONObject jsonObj = new JSONObject();	
		JSONArray jsonarr=GetTable.GetUser();
		if(jsonarr!=null) {
			jsonObj.put("state", 1);
			jsonObj.put("data",jsonarr.toString());
			response.getWriter().append(jsonObj.toString());
		}else {
			jsonObj.put("state", 0);
			jsonObj.put("data","");
			response.getWriter().append(jsonObj.toString());
		}
		
		return null;
	}
	
}
