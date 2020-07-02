package common;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.table.Carinfo;
import org.table.User;
import org.table.Userticket;
import org.util.HibernateSessionFactory;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class AlterTable {
	
	public void AlterTable() {}
	
	public static Boolean AlterUserTicket(String username , String carno,String state) {
		
		JSONArray jsonArr=new JSONArray();
		Userticket userticket;		
		Session session;
		session=HibernateSessionFactory.getSession();
		System.out.println("在这修改票状态userticket"+username+carno+state);
		try {			
			session.clear();
			Transaction tran;
			tran=session.beginTransaction();
			Query query=session.createQuery("from Userticket where username='"+username+"'and "+"carno='"+carno+"'");//where ouserId='"+userid+"'"ouserId
//			Query query=session.createQuery("from Userticket where no='"+username+"'");//where ouserId='"+userid+"'"ouserId
			
			List list = (List)query.list();
			
//			tran.commit();
//			session.close();
			int id=-1;
			if(list.size()>0) {
				userticket=(Userticket)list.get(0);
				id=userticket.getNo();
			}else {
				return false;
			}
			String hql=null;		
			switch(state){
				case "0":
					//预定中 0
					hql= "update Userticket set state=0 where no='"+id+"'";
					break;
				case "1":
					//退票中 1
					hql= "update Userticket set state=1 where no='"+id+"'";
					break;
				case "2":
					//已退票 2
					hql= "update Userticket set state=2 where no='"+id+"'";
					break;
				case "3":
					//已发车 3
					hql= "Update Userticket set state=3 where no='"+id+"'";
					break;
				default:
					break;			
			}			
			//已发车 0
			//hql= "update Userticket set state=1 where id='"+id+"'";
			//已退票 0
			if(id==-1) {
				return false;
			}
			session.clear();
			Query qurey;
			System.out.println("hql:"+hql);
			int i = session.createSQLQuery(hql).executeUpdate();
			System.out.println("在这Userticket,queryI"+i);
			//query.setCacheable(false);
			tran.commit();
			session.close();			

//		        jsonObj=null;
					
			System.out.println("获取表ID："+id);
		}
		catch(Exception e){
			System.out.println(e);
			return false;
		}		
		return true;
	}
	
	
	public static Boolean AlterCarInfo(String username , String carno,String date) {
		
		JSONArray jsonArr=new JSONArray();
		Carinfo carinfo;		
		Session session;
		session=HibernateSessionFactory.getSession();
		System.out.println("在这修改票状态carinfo"+username+carno);
		try {			
			session.clear();
			Transaction tran;
			tran=session.beginTransaction();
			Query query=session.createQuery("from Carinfo where carno='"+carno+"'");//where ouserId='"+userid+"'"ouserId
//			Query query=session.createQuery("from Userticket where no='"+username+"'");//where ouserId='"+userid+"'"ouserId
			
			List list = (List)query.list();
			
//			tran.commit();
//			session.close();
			int num=0;
			if(list.size()>0) {
				carinfo=(Carinfo)list.get(0);
				num=carinfo.getTicNum();
			}else {
				return false;
			}
			if(num<=0) {
				return false;
			}
			num--;
			String hql=null;
			hql= "update Carinfo set ticnum='"+num+"'where carno='"+carno+"'";
			session.clear();
			Query qurey;
			System.out.println("hql:"+hql);
			int i = session.createSQLQuery(hql).executeUpdate();
			System.out.println("在这Userticket,queryI"+i);
			//query.setCacheable(false);
			tran.commit();
			session.close();			
//		        jsonObj=null;
					
			System.out.println("获取表carno："+carno);
		}
		catch(Exception e){
			System.out.println(e);
			return false;
		}
		
		if(!AddTable.AddUserticketList(carinfo,username,date)) {
			return false;
		}
		return true;
	}
}
