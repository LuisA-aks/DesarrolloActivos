using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DatosFuncionarios
    {
        public List<DatosFuncionario> mostrardatafun(string plaza, string conexionF)
        {
            List<DatosFuncionario> pro = new List<DatosFuncionario>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaFuncionarioTraslado @plaza";
                    mycmd.Parameters.Add("@plaza", SqlDbType.VarChar, 150).Value = plaza;


                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        DatosFuncionario p = new DatosFuncionario()
                        {
                            id_Funcionario = rdr["id_Funcionario"].ToString(),
                            nombre_Funcionario = rdr["nombre_Funcionario"].ToString(),
                            plaza_Funcionario= rdr["plaza_Funcionario"].ToString(),
                            nombre_Oficina = rdr["nombre_Oficina"].ToString(),

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

            }


            return pro;
        }
    }

}