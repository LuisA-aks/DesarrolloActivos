using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class IPs
    {
      //  public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public List<Ip> mostrarips(string conexionF)
        {
            List<Ip> pro = new List<Ip>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute  SP_Ips";

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Ip p = new Ip()
                    {
                        id_ip = Convert.ToInt16(rdr["id_ip"]),
                        ip_valor = rdr["ip_valor"].ToString()

                    };
                    pro.Add(p);
                }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }

                //reto codigo
                return pro;
            }
        }
    }
}
