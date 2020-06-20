package common;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.table.Userticket;
import org.util.HibernateSessionFactory;

import net.sf.json.JSONObject;

public class AddTable {
	public void AddTbale() {
		
	}
	public static Boolean AddUserticket(JSONObject jsonObj) {
		
		try {
			
		}catch(Exception e) {
			e.printStackTrace();
			
		}
		
		Session session=HibernateSessionFactory.getSession();		
		System.out.println("在这添加Collection");		
		session.clear();
		Transaction tran=session.beginTransaction();
		
		Query query=null;
		query=session.createQuery("from Userticket where username='"+jsonObj.getString("username")
		+"'and "+"carno='"+jsonObj.getString("carno")+"'");//where ouserId='"+userid+"'"ouserId
//		List list=query.list();
//		if(list.size()>0) {
//			return false;
//		}
//		query=session.createQuery("from Collection where userId='"+
//		jsondate.getString("userid")+"' and gymnasiumId='"+jsondate.getString("no")+"'");
		System.out.println(query);
		System.out.println(query.list().size());
		if(query.list().size()!=0){
			System.out.println("存在");
			tran.commit();
			session.close();
			return false;			
		}else {	
			try {			
				Userticket userticket=new Userticket();
				//gorder.setOid(5);
				System.out.println("存数据："+jsonObj.getString("username"));
				userticket.setUsername(jsonObj.getString("username"));
				userticket.setCarno(jsonObj.getString("carno"));	
				
				userticket.setSplace(jsonObj.getString("spalce"));
				userticket.setEplace(jsonObj.getString("epalce"));
				userticket.setStime(jsonObj.getString("stime"));
				userticket.setEtime(jsonObj.getString("etime"));
				userticket.setSeat(jsonObj.getString("seat"));
				userticket.setLine(jsonObj.getString("line"));
		
				userticket.setTicMon(jsonObj.getString("ticmon"));
				userticket.setPercent(jsonObj.getString("percent"));
				
				userticket.setState(jsonObj.getString("0"));		
				session.save(userticket);
				tran.commit();
				session.close();					
			}catch(Exception e){
				System.out.println(e);
				System.out.println("在这1添加userticket失败");
				return false;
				
			}
			System.out.println("在这1添加userticket成功");
			return true;
		}	
	}

}
