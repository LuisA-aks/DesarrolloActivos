using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class MMarcas
    {
        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        public List<MMarca> mostramarcamodelo(string familia, string conexionF)
        {
            List<MMarca> pro = new List<MMarca>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute Sp_filtraporfamilia @IDFamilia  ";
                mycmd.Parameters.Add("@IDFamilia", SqlDbType.Int, 150).Value = familia;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    MMarca m = new MMarca()
                    {
                        id_Marca = rdr["id_Marca"].ToString(),
                        nombre_Marca = rdr["nombre_Marca"].ToString(),
                        nombre_Modelo = rdr["nombre_Modelo"].ToString(),
                    };
                    pro.Add(m);
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
                return pro;
            }
        }
    }
}