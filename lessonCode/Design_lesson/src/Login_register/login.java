package Login_register;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.util.HibernateSessionFactory;
import org.table.User;

import net.sf.json.JSONObject;

public class login {
	login(){}
	public static boolean getLogin(String username ,String password,int type) {
		
		System.out.println("查询登陆成功");
		User user=new User();
		List list=null;
		try {
			Session session=HibernateSessionFactory.getSession();
			Transaction tran=session.beginTransaction();
			if(type==1) {
				System.out.println("管理员登陆");
			}else if(type==0) {
				System.out.println("用户登陆");
			}else {
				System.out.println("登陆类型错误！");
				return false;
			}
			System.out.println("获取的登陆信息query");	
			Query query=session.createQuery("from User where userName='"+username+"' and passWord='"+password+"'");
			System.out.println("获取的登陆信息query22"+query);	
			list=query.list();
			tran.commit();			
			session.close();
			System.out.println("获取的登陆信息query"+query);			
							
			//System.out.println("获取的场馆信息;"+jsonObj.toString());					
		}
		catch(Exception e){
			System.out.println(e);
		}
			
		if(list.size()>0) {
			return true;
		}else {
			return false;
		}
			
	}
}
