package common;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.table.Carinfo;
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
		
				userticket.setData(jsonObj.getString("date"));
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
public static Boolean AddUserticketList(Carinfo carinfo,String username,String date) {
		
		Session session=HibernateSessionFactory.getSession();		
		System.out.println("在这添加Userticket");		
		session.clear();
		Transaction tran=session.beginTransaction();
		
		Query query=null;
		query=session.createQuery("from Userticket where username='"+username
		+"'and "+"carno='"+carinfo.getCarNo()+"'");//where ouserId='"+userid+"'"ouserId
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
				System.out.println("存数据："+username);
				userticket.setUsername(username);
				userticket.setCarno(carinfo.getCarNo());	
				
				userticket.setSplace(carinfo.getSplace());
				userticket.setEplace(carinfo.getEplace());
				userticket.setData(date);
				userticket.setStime(carinfo.getStime());
				userticket.setEtime(carinfo.getEtime());
				userticket.setSeat("3号车厢6F号");
				userticket.setLine(carinfo.getSplace()+"-"+carinfo.getEplace());
				userticket.setTicMon(carinfo.getPayMon());
				userticket.setPercent("0.5");
				userticket.setState("0");		
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
public static Boolean AddCarInfo(JSONObject jsonObj) {
	
	
	Session session=HibernateSessionFactory.getSession();		
	System.out.println("在这添加AddCarInfo");		
	System.out.println("在这添加AddCarInfo数据为:"+jsonObj.toString());	
	session.clear();
	Transaction tran=session.beginTransaction();
	
	Query query=null;
	query=session.createQuery("from Carinfo where carNo='"+jsonObj.getString("carno")+"'");//where ouserId='"+userid+"'"ouserId
//	List list=query.list();
//	if(list.size()>0) {
//		return false;
//	}
//	query=session.createQuery("from Collection where userId='"+
//	jsondate.getString("userid")+"' and gymnasiumId='"+jsondate.getString("no")+"'");
	System.out.println(query);
	System.out.println(query.list().size());
	if(query.list().size()!=0){
		System.out.println("存在");
		tran.commit();
		session.close();
		return false;			
	}else {	
		try {			
			Carinfo carinfo=new Carinfo();
			//gorder.setOid(5);
			System.out.println("存数据："+jsonObj.getString("carno"));
			carinfo.setCarNo(jsonObj.getString("carno"));
			carinfo.setCarType(jsonObj.getString("cartype"));	
			
			carinfo.setSplace(jsonObj.getString("splace"));
			carinfo.setEplace(jsonObj.getString("eplace"));
			carinfo.setStime(jsonObj.getString("stime"));
			carinfo.setEtime(jsonObj.getString("etime"));
			
	
			carinfo.setTicNum(Integer.parseInt(jsonObj.getString("ticnum")));
			carinfo.setPayMon(jsonObj.getString("paymon"));
					
			session.save(carinfo);
			tran.commit();
			session.close();					
		}catch(Exception e){
			System.out.println(e);
			System.out.println("在这1添加carinfo失败");
			return false;
			
		}
		System.out.println("在这1添加carinfo成功");
		return true;
	}	
}

}
