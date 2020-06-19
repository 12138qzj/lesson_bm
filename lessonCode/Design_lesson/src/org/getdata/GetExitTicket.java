package org.getdata;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import common.GetTable;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class GetExitTicket implements Controller{
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		/**
		 * get������ȡ����
		 * ��username=Username*/
	
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String read=Json.SetJson(request.getReader());
		System.out.println("read,���ݳ����"+read);
		String result []=read.split("=");
		System.out.println("read.strng "+result[0]+result[1]);
		JSONObject jsonObj = new JSONObject();	
		JSONArray jsonarr=GetTable.GetExitTicket(result[1]);
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