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
		
		System.out.println("��ѯ��½�ɹ�");
		User user=new User();
		List list=null;
		try {
			Session session=HibernateSessionFactory.getSession();
			Transaction tran=session.beginTransaction();
			if(type==1) {
				System.out.println("����Ա��½");
			}else if(type==0) {
				System.out.println("�û���½");
			}else {
				System.out.println("��½���ʹ���");
				return false;
			}
			System.out.println("��ȡ�ĵ�½��Ϣquery");	
			Query query=session.createQuery("from User where userName='"+username+"' and passWord='"+password+"'");
			System.out.println("��ȡ�ĵ�½��Ϣquery22"+query);	
			list=query.list();
			tran.commit();			
			session.close();
			System.out.println("��ȡ�ĵ�½��Ϣquery"+query);			
							
			//System.out.println("��ȡ�ĳ�����Ϣ;"+jsonObj.toString());					
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
