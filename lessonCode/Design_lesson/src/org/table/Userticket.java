package org.table;

/**
 * Userticket entity. @author MyEclipse Persistence Tools
 */

public class Userticket implements java.io.Serializable {

	// Fields

	private Integer no;
	private String username;
	private String carno;
	private String splace;
	private String eplace;
	private String data;
	private String stime;
	private String etime;
	private String seat;
	private String line;
	private String ticMon;
	private String percent;
	private String state;

	// Constructors

	/** default constructor */
	public Userticket() {
	}

	/** full constructor */
	public Userticket(String username, String carno, String splace, String eplace, String data, String stime,
			String etime, String seat, String line, String ticMon, String percent, String state) {
		this.username = username;
		this.carno = carno;
		this.splace = splace;
		this.eplace = eplace;
		this.data = data;
		this.stime = stime;
		this.etime = etime;
		this.seat = seat;
		this.line = line;
		this.ticMon = ticMon;
		this.percent = percent;
		this.state = state;
	}

	// Property accessors

	public Integer getNo() {
		return this.no;
	}

	public void setNo(Integer no) {
		this.no = no;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCarno() {
		return this.carno;
	}

	public void setCarno(String carno) {
		this.carno = carno;
	}

	public String getSplace() {
		return this.splace;
	}

	public void setSplace(String splace) {
		this.splace = splace;
	}

	public String getEplace() {
		return this.eplace;
	}

	public void setEplace(String eplace) {
		this.eplace = eplace;
	}

	public String getData() {
		return this.data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getStime() {
		return this.stime;
	}

	public void setStime(String stime) {
		this.stime = stime;
	}

	public String getEtime() {
		return this.etime;
	}

	public void setEtime(String etime) {
		this.etime = etime;
	}

	public String getSeat() {
		return this.seat;
	}

	public void setSeat(String seat) {
		this.seat = seat;
	}

	public String getLine() {
		return this.line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public String getTicMon() {
		return this.ticMon;
	}

	public void setTicMon(String ticMon) {
		this.ticMon = ticMon;
	}

	public String getPercent() {
		return this.percent;
	}

	public void setPercent(String percent) {
		this.percent = percent;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

}