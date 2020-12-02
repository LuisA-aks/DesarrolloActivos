using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Disponibles
    {
       // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public List<Disponible> mostrardisponibles(string conexionF)
        {
            List<Disponible> pro = new List<Disponible>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_IpsDisponibles ";
              

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Disponible p = new Disponible()
                    {
                        id_ip= Convert.ToInt16(rdr["id_ip"]),
                        ip_valor= rdr["ip_valor"].ToString()
                    };
                    pro.Add(p);
                    //reto codigo
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
            }
            return pro;
        }
    }
}