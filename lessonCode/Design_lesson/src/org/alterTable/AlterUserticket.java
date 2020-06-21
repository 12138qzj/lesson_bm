package org.alterTable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import common.AlterTable;
import common.GetTable;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class AlterUserticket implements Controller{
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
	
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		String read=Json.SetJson(request.getReader());
		System.out.println("read,���ݳ����"+read);
				
		
		JSONObject json=new JSONObject();
		JSONObject jsonObj=new JSONObject();
		
		
		json= JSONObject.fromObject(read);
	    String params=json.getString("params");
	    System.out.println("params"+params);
	    jsonObj=JSONObject.fromObject(params);
	    System.out.println("jsonObj"+jsonObj);
//		 jsonObj = new JSONObject();
		//��ȡJSON����
		System.out.println("read"+jsonObj);
		Boolean res=AlterTable.AlterUserTicket(
				jsonObj.getString("username"),
				jsonObj.getString("carno"),
				jsonObj.getString("state"));
//		Boolean res=AlterTable.AlterUserTicket(
//				"12138",
//				"K8788",
//				"3");
//		JSONObject jsonObj = new JSONObject();
		if(res) {
			jsonObj.put("state", 1);
			jsonObj.put("message","�޸ĳɹ�");
			response.getWriter().append(jsonObj.toString());
		}else {
			jsonObj.put("state", 0);
			jsonObj.put("message","�޸�ʧ��");
			response.getWriter().append(jsonObj.toString());
		}
		
		return null;
	}
	
}