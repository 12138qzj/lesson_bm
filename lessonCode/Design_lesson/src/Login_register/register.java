package Login_register;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.util.HibernateSessionFactory;

import common.date;

import org.table.User;

public class register {
	public void register() {
	}
	public static Boolean getRegister(String username,String password) {	
		User table=new User();
		Session session=HibernateSessionFactory.getSession();
		Transaction tran=session.beginTransaction();
		session.clear();
		if((table=(User)session.get(User.class, username))!=null) {
			System.out.println("’À∫≈“‘¥Ê‘⁄");
			session.close();
			table=null;
			return false;
		}else {	
			User user=new User();
			try {
				System.out.println("’À∫≈¥Ê»Î÷–");
				user.setUserName(username);    //’À∫≈
				user.setPassWord(password);   //√‹¬Î
				user.setDate(date.getDate());
				session.save(user);
				tran.commit();
				session.close();			
			}catch(Exception e) {
				e.printStackTrace();
				return false;
			}		
			return true;
		}
	}
}
