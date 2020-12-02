using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla1AS
    {
       // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT3335;Integrated Security=True";

        public List<Tabla1A> mostrarconsulta1(string activo, string conexionF)
        {
            List<Tabla1A> pro = new List<Tabla1A>();

          

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaActivoporplaca @placa ";
                mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = activo;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Tabla1A p = new Tabla1A()
                    {
                        placa_Activo = rdr["placa_Activo"].ToString(),
                        ubicacion = rdr["nombre_Oficina"].ToString(),
                        descripcion = rdr["descripcion"].ToString(),
                        licitacion = rdr["id_licitacion"].ToString(),
                        seguro = rdr["es_poliza"].ToString(),
                        proveedor = rdr["nombre_Proveedor"].ToString(),
                        estado = rdr["nombre_Estado"].ToString(),
                        precio_activo = rdr["precio_activo"].ToString(),

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
                return pro;
            }


        }
        public List<Tabla1A> mostrartodo(string conexionF)
        {
            List<Tabla1A> pro = new List<Tabla1A>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaActivotodos";
              

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Tabla1A p = new Tabla1A()
                    {
                        placa_Activo = rdr["placa_Activo"].ToString(),
                        ubicacion = rdr["nombre_Oficina"].ToString(),
                        descripcion = rdr["descripcion"].ToString(),
                        licitacion = rdr["id_licitacion"].ToString(),
                        seguro = rdr["es_poliza"].ToString(),
                        proveedor = rdr["nombre_Proveedor"].ToString(),
                        estado =  rdr["nombre_Estado"].ToString(),
                        precio_activo = rdr["precio_activo"].ToString(),

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
                return pro;
            }
        }

        public List<Tabla1A> mostrarestados(string conexionF, string estados)
        {
            List<Tabla1A> pro = new List<Tabla1A>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaActivosPorEstado @idestado";
                    mycmd.Parameters.Add("@idestado", SqlDbType.VarChar, 150).Value = estados;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Tabla1A p = new Tabla1A()
                        {
                            placa_Activo = rdr["placa_Activo"].ToString(),
                            ubicacion = rdr["nombre_Oficina"].ToString(),
                            descripcion = rdr["descripcion"].ToString(),
                            licitacion = rdr["id_licitacion"].ToString(),
                            seguro = rdr["es_poliza"].ToString(),
                            proveedor = rdr["nombre_Proveedor"].ToString(),
                            estado = rdr["nombre_Estado"].ToString(),
                            precio_activo = rdr["precio_activo"].ToString(),


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
                return pro;
            }
        }
    }

}