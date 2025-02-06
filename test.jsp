<%@ page import="java.sql.*" %>
<%
    // MySQL 資料庫連接參數
    String url = "jdbc:mysql://127.0.0.1:3306/TEST";
    String user = "root";
    String password = "";

    Connection conn = null;
    try {
        Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL 驅動
        conn = DriverManager.getConnection(url, user, password);
    } catch (Exception e) {
        e.printStackTrace();
    }
%>