package org.util;

import org.hibernate.Session;

import org.util.HibernateSessionFactory;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Session session=HibernateSessionFactory.getSession();
		System.out.println("Ñî¼ÒÆë");
	}

}
