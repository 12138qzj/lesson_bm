package common;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.util.HibernateSessionFactory;



public class DeleteTable {
	public void DeleteTbale() {}

public static Boolean DeleteUser(String username) {
		
	
		Session session;
		session=HibernateSessionFactory.getSession();
		System.out.println("在这删除user");
		try {			
			session.clear();
			Transaction tran;
			tran=session.beginTransaction();
			Query query=session.createQuery("Delete from User where username='"+username+"'");//where ouserId='"+userid+"'"ouserId

			tran.commit();
			session.close();
			
		}catch(Exception e){
			System.out.println(e);
			return false;
		}		
		return true;
	}
public static Boolean DeleteCarInfo(String carno) {
		
	Session session;
	session=HibernateSessionFactory.getSession();
	System.out.println("在这删除Carinfo");
	try {			
		session.clear();
		Transaction tran;
		tran=session.beginTransaction();
		Query query=session.createQuery("Delete from Carinfo where carNo='"+carno+"'");//where ouserId='"+userid+"'"ouserId

		tran.commit();
		session.close();			
	}
	catch(Exception e){
		System.out.println(e);
		return false;
	}		
	return true;
}
public static Boolean DeleteUserticket(String username , String carno,String no) {
	
//	Userticket userticket;		
	Session session;
	session=HibernateSessionFactory.getSession();
	System.out.println("在这删除userticket");
	try {			
		session.clear();
		Transaction tran;
		tran=session.beginTransaction();
		//String hql = "Delete from Userticket where no='"+no+"'";
		
		String hql = "Delete from Userticket where username=? and carno=?";
		
		System.out.println(hql);	
//		Query query=session.createQuery(hql);
		int i = session.createSQLQuery(hql)
				.setParameter(0, username)
				.setParameter(1, carno)
				.executeUpdate();	
		
		Query query=session.createQuery("from Userticket where username='"+username+"'and "+"carno='"+carno+"'");//where ouserId='"+userid+"'"ouserId
		List list = (List)query.list();
		if(list.size()>0){
			return false;
		}		
		tran.commit();
		session.close();							
	}
	catch(Exception e){
		System.out.println(e);
		return false;
	}		
	return true;
}
}
