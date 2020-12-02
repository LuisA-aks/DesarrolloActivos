using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Traslado
    {
        public string traslado_funcionario(int idoficinanueva, int idfuncionario, string boleta, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                //try
                //{
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_TrasladoFuncionario @NuevaOficina, @idFuncionario, @boleta";
                    mycmd.Parameters.Add("@NuevaOficina", SqlDbType.Int, 150).Value = idoficinanueva;
                    mycmd.Parameters.Add("@idFuncionario", SqlDbType.Int, 150).Value = idfuncionario;
                    mycmd.Parameters.Add("@boleta", SqlDbType.VarChar, 150).Value = boleta;                 
                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        mensaje = rdr["Mensaje"].ToString();
                        //reto codigo
                    }
                }
            return mensaje;
            //catch (Exception EX)
            //{
            //    EX.GetBaseException();
            //}
            //finally
            //{
            //    myConn.Close();
            //}
        }
            //return mensaje;
        }

    }
//}