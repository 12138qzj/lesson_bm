package common;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.util.HibernateSessionFactory;
import org.table.User;
import org.table.Carinfo;
import org.table.Userticket;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class GetTable {

	public void GetTable() {}
	public static JSONArray GetUser() {
		
		JSONArray jsonArr=new JSONArray();
		User user;		
		Session session=HibernateSessionFactory.getSession();
		System.out.println("在这Concernuser");
		try {			
			session.clear();
			Transaction tran=session.beginTransaction();
			Query query=session.createQuery("from User");//where ouserId='"+userid+"'"ouserId
			System.out.println("在这User"+query);
			//query.setCacheable(false);
			List list=query.list();
			tran.commit();
			//session.close();			
			System.out.println("query:"+query);
			int count=0;
			for(int i=0;i<list.size();i++) {
				user=(User)list.get(i);//将信息取出来
				JSONObject jsonObj = new JSONObject();
				System.out.println("取出用户民:"+user.getUserName());
				if(user.getUserName().equals("username")) {	
					continue;
				}
				jsonObj.put("key", count++);
				jsonObj.put("name", user.getUserName());
			    jsonObj.put("pwd", user.getPassWord());
			    jsonObj.put("date", user.getDate());      
		        
		        jsonArr.add(jsonObj);
//		        jsonObj=null;
			}		
			System.out.println("获取用户信息："+jsonArr);
			session.close();
		}
		catch(Exception e){
			System.out.println(e);
			return null;
		}		
		return jsonArr;
	}
public static JSONArray GetCarInfo() {
		
		JSONArray jsonArr=new JSONArray();
		Carinfo carinfo;		
		Session session=HibernateSessionFactory.getSession();
		System.out.println("在这Concernuser");
		try {			
			session.clear();
			Transaction tran=session.beginTransaction();
			Query query=session.createQuery("from Carinfo");//where ouserId='"+userid+"'"ouserId
			System.out.println("在这Carinfo"+query);
			//query.setCacheable(false);
			List list=query.list();
			tran.commit();
			//session.close();			
			System.out.println("query:"+query);
			int count=0;
			for(int i=0;i<list.size();i++) {
				carinfo=(Carinfo)list.get(i);//将信息取出来
				JSONObject jsonObj = new JSONObject();
				System.out.println("取出:"+carinfo.getCarNo());
				jsonObj.put("CarNo", carinfo.getCarNo());
			    jsonObj.put("SPlace", carinfo.getSplace());
			    jsonObj.put("EPlace", carinfo.getStime());      
			    
				jsonObj.put("STime", carinfo.getEtime());
			    jsonObj.put("TicNum", carinfo.getTicNum());
			    jsonObj.put("PayMon", carinfo.getPayMon());   
		        
		        jsonArr.add(jsonObj);
//		        jsonObj=null;
			}		
			System.out.println("获取用户信息："+jsonArr);
			session.close();
		}
		catch(Exception e){
			System.out.println(e);
			return null;
		}		
		return jsonArr;
	}
public static JSONArray GetExitTicket(String username) {
		
		JSONArray jsonArr=new JSONArray();
		Userticket userticket;		
		Session session=HibernateSessionFactory.getSession();
		System.out.println("在这Concernuser");
		try {			
			session.clear();
			Transaction tran=session.beginTransaction();
			Query query=null;
			if(username.equals("all")) {
				query=session.createQuery("from Userticket ");//where ouserId='"+userid+"'"ouserId
				
			}else {
				query=session.createQuery("from Userticket where username='"+username+"'");//where ouserId='"+userid+"'"ouserId
			}
			System.out.println("在这Carinfo"+query);
			//query.setCacheable(false);
			List list=query.list();
			tran.commit();
			//session.close();			
			System.out.println("query:"+query);
			int count=0;
			for(int i=0;i<list.size();i++) {
				userticket=(Userticket)list.get(i);//将信息取出来
				JSONObject jsonObj = new JSONObject();
				System.out.println("取出no:"+userticket.getNo());
				jsonObj.put("No", userticket.getNo());
			    jsonObj.put("username", userticket.getUsername());
			    jsonObj.put("carno", userticket.getCarno());      
			    
				jsonObj.put("splace", userticket.getSplace());
			    jsonObj.put("eplace", userticket.getEplace());
			    jsonObj.put("stime", userticket.getStime()); 
			    
			    jsonObj.put("seat", userticket.getSeat());
			    jsonObj.put("line", userticket.getLine());
			    jsonObj.put("ticmon", userticket.getTicMon()); 
		        
			    jsonObj.put("percent", userticket.getPercent());
			    jsonObj.put("state", userticket.getState());    	        
		        jsonArr.add(jsonObj);
//		        jsonObj=null;
			}		
			System.out.println("获取用户票信息："+jsonArr);
			session.close();
		}
		catch(Exception e){
			System.out.println(e);
			return null;
		}		
		return jsonArr;
	}
}
