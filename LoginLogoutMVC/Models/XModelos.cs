using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class XModelos
    {
        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public  List<XModelo> mostrarmodelos(string conexionF)
        {
            List<XModelo> pro = new List<XModelo>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute  SP_Modelo";

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    XModelo p = new XModelo()
                    {
                        id_modelo = Convert.ToInt16(rdr["id_modelo"]),
                        nombre_modelo = rdr["nombre_modelo"].ToString()

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