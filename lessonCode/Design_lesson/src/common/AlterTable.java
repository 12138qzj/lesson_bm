package common;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.table.User;
import org.table.Userticket;
import org.util.HibernateSessionFactory;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class AlterTable {
	
	public void AlterTable() {}
	
	public static Boolean AlterUserTicket(String username ,String carno) {
		
		JSONArray jsonArr=new JSONArray();
		Userticket userticket;		
		Session session=HibernateSessionFactory.getSession();
		System.out.println("�����޸�(��Ʊ��)userticket");
		try {			
			session.clear();
			Transaction tran=session.beginTransaction();
			Query query=session.createQuery("Select * from Userticket where username='"+username+"'"+"carno='"+carno+"'");//where ouserId='"+userid+"'"ouserId
			List list = (List)query.list();
			int id=-1;
			if(list.size()>0) {
				userticket=(Userticket)list.get(0);
				id=userticket.getNo();
			}else {
				return false;
			}
			String hql=null;
			//Ԥ���� 0
			//hql= "update Userticket set state=0 where id='"+id+"'";
			//�ѷ��� 0
			//hql= "update Userticket set state=1 where id='"+id+"'";
			//����Ʊ 0
			if(id==-1) {
				return false;
			}
				
			hql= "update Userticket set state=2 where id='"+id+"'";
			Query qurey;
			System.out.println("hql:"+hql);
			qurey= session.createQuery(hql);
			
			System.out.println("����Userticket,query"+query);
			//query.setCacheable(false);
			tran.commit();
			session.close();			

//		        jsonObj=null;
					
			System.out.println("��ȡ�û���Ϣ��"+jsonArr);
		}
		catch(Exception e){
			System.out.println(e);
			return false;
		}		
		return true;
	}
	
}
