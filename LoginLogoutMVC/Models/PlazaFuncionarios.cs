using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class PlazaFuncionarios
    {
        public List<PlazaFuncionario> damedatosfuncionario(string conexionF, string placa)
        {
            List<PlazaFuncionario> fun = new List<PlazaFuncionario>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_Cargaid @placa";
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        PlazaFuncionario p = new PlazaFuncionario()
                        {
                            id_Activo =rdr["id_Activo"].ToString(),
  
                        };
                        fun.Add(p);
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

            return fun;
        }
    }
}