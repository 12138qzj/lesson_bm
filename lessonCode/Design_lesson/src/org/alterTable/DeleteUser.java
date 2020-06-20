package org.alterTable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import common.DeleteTable;
import net.sf.json.JSONObject;

public class DeleteUser implements Controller{
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
	
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		String read=Json.SetJson(request.getReader());
		System.out.println("read,���ݳ����"+read);
		JSONObject jsonObj = new JSONObject();
//		//��ȡJSON����
		jsonObj= JSONObject.fromObject(read);
		
//		Boolean res=AlterTable.AlterUserTicket(
//				jsonObj.getString("username"),
//				jsonObj.getString("carno"),
//				jsonObj.getString("state"));
		Boolean res=DeleteTable.DeleteUser (jsonObj.getString("username"));
		if(res) {
			jsonObj.put("state", 1);
			jsonObj.put("message","ɾ���ɹ�");
			response.getWriter().append(jsonObj.toString());
		}else {
			jsonObj.put("state", 0);
			jsonObj.put("message","ɾ��ʧ��");
			response.getWriter().append(jsonObj.toString());
		}
		
		return null;
	}
}
