using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;


namespace LoginLogoutMVC.Models
{
    public class Oficio
    {
        public string IngresaOficio(string numOficio, int regionSalida, int regionEntrada, string tipoequipo, string modelo, string descripcion, string placaact,
            string serie, string correodestino, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                //try
              //  {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_IngresaOficio @NumOficio, @RegionSalida, @RegionEntrada, @TipoEquipo, @Modelo,@Descripcion,@Placaactivo,@SerieActivo,@CorreoDestino";
                    mycmd.Parameters.Add("@NumOficio", SqlDbType.VarChar, 150).Value = numOficio;
                    mycmd.Parameters.Add("@RegionSalida", SqlDbType.Int, 150).Value = regionSalida;
                    mycmd.Parameters.Add("@RegionEntrada", SqlDbType.Int, 150).Value = regionEntrada;
                    mycmd.Parameters.Add("@TipoEquipo", SqlDbType.VarChar, 150).Value = tipoequipo;
                    mycmd.Parameters.Add("@Modelo", SqlDbType.VarChar, 150).Value = modelo;
                    mycmd.Parameters.Add("@Descripcion", SqlDbType.VarChar, 150).Value = descripcion;
                    mycmd.Parameters.Add("@Placaactivo", SqlDbType.VarChar, 150).Value = placaact;
                    mycmd.Parameters.Add("@SerieActivo", SqlDbType.VarChar, 150).Value = serie;
                    mycmd.Parameters.Add("@CorreoDestino", SqlDbType.VarChar, 150).Value = correodestino;


                    SqlDataReader rdr = mycmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        mensaje = rdr["Mensaje"].ToString();
                        //reto codigo
                    }
                //}

                //catch (Exception EX)
                //{
                  //  EX.GetBaseException();
                //}
                //finally
                //{
                  //  myConn.Close();
                //}
            }
            return mensaje;
        }

    }
}