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
	
	public static Boolean AlterUserTicket(String username , String carno,String state) {
		
		JSONArray jsonArr=new JSONArray();
		Userticket userticket;		
		Session session;
		session=HibernateSessionFactory.getSession();
		System.out.println("�����޸�(��Ʊ��)userticket");
		try {			
			session.clear();
			Transaction tran;
			tran=session.beginTransaction();
			Query query=session.createQuery("from Userticket where username='"+username+"'and "+"carno='"+carno+"'");//where ouserId='"+userid+"'"ouserId
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
					//Ԥ���� 0
					hql= "update Userticket set state=0 where no='"+id+"'";
					break;
				case "1":
					//��Ʊ�� 1
					hql= "update Userticket set state=1 where no='"+id+"'";
					break;
				case "2":
					//����Ʊ 2
					hql= "update Userticket set state=2 where no='"+id+"'";
					break;
				case "3":
					//�ѷ��� 3
					hql= "Update Userticket set state=3 where no='"+id+"'";
					break;
				default:
					break;			
			}			
			//�ѷ��� 0
			//hql= "update Userticket set state=1 where id='"+id+"'";
			//����Ʊ 0
			if(id==-1) {
				return false;
			}
			session.clear();
			Query qurey;
			System.out.println("hql:"+hql);
			int i = session.createSQLQuery(hql).executeUpdate();
			System.out.println("����Userticket,queryI"+i);
			//query.setCacheable(false);
			tran.commit();
			session.close();			

//		        jsonObj=null;
					
			System.out.println("��ȡ��ID��"+id);
		}
		catch(Exception e){
			System.out.println(e);
			return false;
		}		
		return true;
	}
	
}
