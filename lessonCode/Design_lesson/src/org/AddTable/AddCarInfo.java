package org.AddTable;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import org.Json.Json;

import common.AddTable;
import common.AlterTable;
import net.sf.json.JSONObject;

public class AddCarInfo implements Controller{
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
	
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		String read=Json.SetJson(request.getReader());
		System.out.println("read,���ݳ����"+read);
		JSONObject jsonObj = new JSONObject();
		//��ȡJSON����
		jsonObj= JSONObject.fromObject(read);
		jsonObj=JSONObject.fromObject(jsonObj.getString("params"));
//		Boolean res=AlterTable.AlterUserTicket(
//				jsonObj.getString("username"),
//				jsonObj.getString("carno"),
//				jsonObj.getString("state"));
		Boolean res=AddTable.AddCarInfo(jsonObj);
		if(res) {
			jsonObj.put("state", 1);
			jsonObj.put("message","��ӳɹ�");
			response.getWriter().append(jsonObj.toString());
		}else {
			jsonObj.put("state", 0);
			jsonObj.put("message","���ʧ��");
			response.getWriter().append(jsonObj.toString());
		}
		
		return null;
	}
	
}