using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class XOficinas
    {
        public List<XOficina> mostrar_Oficinas(string region, string conexionF)
        {
            List<XOficina> l = new List<XOficina>();
            //string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
            //string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_DameOficinas @Region";
                mycmd.Parameters.Add("@Region", SqlDbType.Int, 150).Value =Convert.ToInt16(region);

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    XOficina f = new XOficina()
                    {
                        id_Oficina = rdr["id_Oficina"].ToString(),
                        nombre_Oficina = rdr["nombre_Oficina"].ToString()
                    };
                    l.Add(f);
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
                return l;
            }
            



        }
    }
}