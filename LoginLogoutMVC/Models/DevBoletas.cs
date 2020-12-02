using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DevBoletas
    {
        public List<DevBoleta> dameinfoboleta(string conexionF, string boleta)
        {
            List<DevBoleta> pro = new List<DevBoleta>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaDevolucion @boleta";
                    mycmd.Parameters.Add("@boleta", SqlDbType.VarChar, 150).Value = boleta;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        DevBoleta bol = new DevBoleta()
                        {
                            id_boleta= rdr["id_boleta"].ToString(),
                            nombre_Funcionario= rdr["nombre_Funcionario"].ToString(),
                            placa_Activo = rdr["placa_Activo"].ToString(),
                            descripcion = rdr["descripcion"].ToString(),
                            id_Activo = rdr["id_Activo"].ToString(),
                            idip = rdr["idip"].ToString(),
                            plaza_Funcionario = rdr["plaza_Funcionario"].ToString(),

                        };
                        pro.Add(bol);
                      
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