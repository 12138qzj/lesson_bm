package org.table;

/**
 * Carinfo entity. @author MyEclipse Persistence Tools
 */

public class Carinfo implements java.io.Serializable {

	// Fields

	private String carNo;
	private String splace;
	private String eplace;
	private String carType;
	private String stime;
	private String etime;
	private Integer ticNum;
	private String payMon;

	// Constructors

	/** default constructor */
	public Carinfo() {
	}

	/** full constructor */
	public Carinfo(String carNo, String splace, String eplace, String carType, String stime, String etime,
			Integer ticNum, String payMon) {
		this.carNo = carNo;
		this.splace = splace;
		this.eplace = eplace;
		this.carType = carType;
		this.stime = stime;
		this.etime = etime;
		this.ticNum = ticNum;
		this.payMon = payMon;
	}

	// Property accessors

	public String getCarNo() {
		return this.carNo;
	}

	public void setCarNo(String carNo) {
		this.carNo = carNo;
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

	public String getCarType() {
		return this.carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
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

	public Integer getTicNum() {
		return this.ticNum;
	}

	public void setTicNum(Integer ticNum) {
		this.ticNum = ticNum;
	}

	public String getPayMon() {
		return this.payMon;
	}

	public void setPayMon(String payMon) {
		this.payMon = payMon;
	}

}