package org.Json;

import java.io.BufferedReader;
import java.io.IOException;


public class Json {
	private static String read=null;
	private  static BufferedReader mess=null;
	public Json() {}
	public static String SetJson(BufferedReader mess) throws IOException {
	    StringBuilder sb = new StringBuilder();
	    String line = null;
	    /**
	     * ����Ǵ��ⲿץȡJson���ݣ������ַ���������
	     */
	    try {
	    	while ((line = mess.readLine()) != null) {
	    		System.out.println("�����������ɹ�---12138");
	    		System.out.println(line);
		        sb.append(line);
		    }
	    }catch(Exception e) {
	    	e.printStackTrace();
	    }
	    
	    /**
	     * ���ַ������Ϊ�ַ���
	     */
	    		 
	    read = sb.toString();
	    /**
	     * Json��һ��������������������ֱ��key-valueȡ����,���ﲻ������ֱ�������������װ��
	     */
//	    JSONObject json = JSONObject.fromObject(read);
//	    System.out.println("json"+json);
	    /**
	     * ����ȡ��
	     */
//	    account=json.getString("name");
//	    password=json.getString("pwd");
//		System.out.println("��ȡ��name+pwd"+account+password);
	    return read;
	}
	
}
