package common;

import java.text.SimpleDateFormat;
import java.util.Date;

public class date {
	public void data() {
		
	}
	public static String getDate() {
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-mm-dd hh:mm");
		System.out.println(sdf.format(date));
		return sdf.format(date);
	}
}
