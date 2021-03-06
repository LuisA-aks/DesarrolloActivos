USE [PANIDTIFINAL]
GO
/****** Object:  StoredProcedure [dbo].[selectfamilia]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[selectfamilia]
as
select id_Familia,nombre_Familia from Familia order by nombre_Familia asc






GO
/****** Object:  StoredProcedure [dbo].[selectproveedores]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create procedure [dbo].[selectproveedores]
as
select * from Proveedor order by nombre_Proveedor asc






GO
/****** Object:  StoredProcedure [dbo].[SP_AsignaActivos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SP_AsignaActivos]
@num_boleta varchar(60),
@id_Funcionario int,
@id_Activo int,
@id_Usuario int,
@ip int
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @variableofi int
select @variableofi = id_Oficina from Funcionarios where id_Funcionario = @id_Funcionario
if(exists(select * from Activos where id_Activo= @id_Activo and (id_EstadoActivo=3 or id_EstadoActivo=2)))
begin
set @Mensaje='Existe Activo, su estado es Activo(asignado)'
update Activos set id_EstadoActivo=1 where id_Activo = @id_Activo
update Activos set ubicacion = @variableofi where id_Activo = @id_Activo
update BodegaTransito set estado_BodegaTransito=1,fechaCambi_BodegaTransito=GETDATE() where id_Activo=@id_Activo
insert into Registro_Movimientos values(GETDATE(),3,@id_Usuario,@id_Activo)
insert into AsignaActivos values(@num_boleta,@id_Funcionario,@id_Activo,@id_Usuario,GETDATE(),@ip)
update Ips set ip_disponible=1 where id_ip=@ip

select @Mensaje as Mensaje
end
else
set @Mensaje='EL activo ya fue asignado, o no se encuentra disponible'
select @Mensaje as Mensaje
end

GO
/****** Object:  StoredProcedure [dbo].[SP_Bodegas]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create procedure [dbo].[SP_Bodegas]
as
begin
select  id_Oficina,nombre_Oficina from Oficina where es_bodega=1
end






GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivoporlicitacion]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaActivoporlicitacion]
@licitacion varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a where a.id_licitacion = @licitacion))
begin
select a.placa_Activo, c.nombre_Oficina, a.descripcion, a.id_licitacion, a.es_poliza, d.nombre_Proveedor, e.nombre_Estado, a.precio_activo from Activos a
inner join Oficina c on c.id_Oficina = a.ubicacion 
inner join Proveedor d on d.id_Proveedor = a.id_Proveedor
inner join Estado e on e.id_Estado = a.id_EstadoActivo
where a.id_licitacion = @licitacion
end
else
begin
set @Mensaje='No hay registros de la licitacion ingresada'
select @Mensaje as Mensaje
end
end
end
GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivoporoficina]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaActivoporoficina]
@oficina varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a 
inner join Oficina b on b.nombre_Oficina = @oficina))
begin
select a.placa_Activo, c.nombre_Oficina, a.descripcion, a.id_licitacion, a.es_poliza, d.nombre_Proveedor, e.nombre_Estado,a.precio_activo  from Activos a
inner join Oficina c on c.id_Oficina = a.ubicacion 
inner join Proveedor d on d.id_Proveedor = a.id_Proveedor
inner join Estado e on e.id_Estado = a.id_EstadoActivo
where c.nombre_Oficina = @oficina
end
else
begin
set @Mensaje='No hay registros de la oficina ingresada'
select @Mensaje as Mensaje
end
end
end

GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivoporplaca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaActivoporplaca]
@placa varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a where a.placa_Activo = @placa))
begin
select a.placa_Activo, c.nombre_Oficina, a.descripcion, a.id_licitacion, a.es_poliza, d.nombre_Proveedor,  e.nombre_Estado,a.precio_activo  from Activos a
inner join Oficina c on c.id_Oficina = a.ubicacion 
inner join Proveedor d on d.id_Proveedor = a.id_Proveedor
inner join Estado e on e.id_Estado = a.id_EstadoActivo
where a.placa_Activo = @placa
end
else
begin
set @Mensaje='No hay registros de la placa ingresada'
select @Mensaje as Mensaje
end
end
end
GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivosPorEstado]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaActivosPorEstado]
@idestado varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a where a.id_EstadoActivo = @idestado))
begin
select a.placa_Activo, c.nombre_Oficina, a.descripcion, a.id_licitacion, a.es_poliza, d.nombre_Proveedor,  e.nombre_Estado,a.precio_activo  from Activos a
inner join Oficina c on c.id_Oficina = a.ubicacion 
inner join Proveedor d on d.id_Proveedor = a.id_Proveedor
inner join Estado e on e.id_Estado = a.id_EstadoActivo
where a.id_EstadoActivo = @idestado
end
else
begin
set @Mensaje='No hay registros del estado selecccionado'
select @Mensaje as Mensaje
end
end
end


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivosReparados]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaActivosReparados]
as
select a.numeroboleta, a.Fecha_Reparacion, a.Reparacion, b.placa_Activo, b.descripcion from ActivosReparados a
inner join Activos b on a.idActivo = b.id_Activo




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivosReparadosporBoleta]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaActivosReparadosporBoleta]
@boleta varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from ActivosReparados a where a.numeroboleta = @boleta))
begin
select a.numeroboleta, a.Fecha_Reparacion, a.Reparacion, b.placa_Activo, b.descripcion from ActivosReparados a
inner join Activos b on a.idActivo = b.id_Activo
where a.numeroboleta = @boleta
end

end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivosReparadosporPlaca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaActivosReparadosporPlaca]
@placa varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a where a.placa_Activo = @placa and a.id_EstadoActivo = 1))
begin
select a.numeroboleta, a.Fecha_Reparacion, a.Reparacion, b.placa_Activo, b.descripcion from ActivosReparados a
inner join Activos b on a.idActivo = b.id_Activo
where b.placa_Activo = @placa
end

end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaActivotodos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaActivotodos]
as
select a.placa_Activo, c.nombre_Oficina, a.descripcion, a.id_licitacion, a.es_poliza, d.nombre_Proveedor, e.nombre_Estado, a.precio_activo  from Activos a
inner join Oficina c on c.id_Oficina = a.ubicacion 
inner join Proveedor d on d.id_Proveedor = a.id_Proveedor
inner join Estado e on e.id_Estado =a.id_EstadoActivo



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaAsignaActivosfecha]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaAsignaActivosfecha]
@fecha varchar(50)
as

select a.fecha_AsignaActivos, b.descripcion,b.placa_Activo, c.plaza_Funcionario, c.nombre_Funcionario, c.apellido_Funcionario, d.nombre_Usuario from AsignaActivos a
inner join Activos b on b.id_Activo = a.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
inner join MUsuarios d on d.id_Usuario = a.id_Usuario
where a.fecha_AsignaActivos = @fecha and b.id_EstadoActivo = 1





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaAsignaActivosplaca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaAsignaActivosplaca]
@placa varchar(50)
as

select a.fecha_AsignaActivos, b.descripcion,b.placa_Activo, c.plaza_Funcionario, c.nombre_Funcionario, c.apellido_Funcionario, d.nombre_Usuario from AsignaActivos a
inner join Activos b on b.id_Activo = a.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
inner join MUsuarios d on d.id_Usuario = a.id_Usuario
where b.placa_Activo = @placa and b.id_EstadoActivo =1





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaAsignaActivosplaza]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaAsignaActivosplaza]
@plaza varchar(50)
as

select a.fecha_AsignaActivos, b.descripcion,b.placa_Activo, c.plaza_Funcionario, c.nombre_Funcionario, c.apellido_Funcionario, d.nombre_Usuario from AsignaActivos a
inner join Activos b on b.id_Activo = a.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
inner join MUsuarios d on d.id_Usuario = a.id_Usuario
where c.plaza_Funcionario = @plaza and b.id_EstadoActivo =1





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaAsignaActivostodos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaAsignaActivostodos]
as
select a.fecha_AsignaActivos, b.descripcion,b.placa_Activo, c.plaza_Funcionario, c.nombre_Funcionario, c.apellido_Funcionario, d.nombre_Usuario from AsignaActivos a
inner join Activos b on b.id_Activo = a.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
inner join MUsuarios d on d.id_Usuario = a.id_Usuario
where b.id_EstadoActivo = 1





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaBodegaDesechofecha]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaBodegaDesechofecha]
@fecha varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from BodegaDesecho  where fecha_BodegaDesecho = @fecha))
begin
select a.fecha_BodegaDesecho,a.observaciones_BodegaDesecho, b.nombre_Usuario, c.placa_Activo, c.descripcion  from BodegaDesecho a
inner join MUsuarios b on b.id_Usuario = a.id_Usuario
inner join Activos c on a.id_Activo = c.id_Activo
where a.fecha_BodegaDesecho = @fecha
end
else
begin
set @Mensaje='La Fecha no coicide con niguna fecha'
select @Mensaje as Mensaje
end
end
end





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaBodegaDesechoplaca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaBodegaDesechoplaca]
@placa varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from BodegaDesecho 
inner join Activos a on a.placa_Activo  = @placa))
begin
select a.fecha_BodegaDesecho,a.observaciones_BodegaDesecho, b.nombre_Usuario, c.placa_Activo, c.descripcion  from BodegaDesecho a
inner join MUsuarios b on b.id_Usuario = a.id_Usuario
inner join Activos c on a.id_Activo = c.id_Activo
where c.placa_Activo = @placa
end
else
begin
set @Mensaje='La placa no coicide con niguna placa de activo desecho'
select @Mensaje as Mensaje
end
end
end





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaBodegadesechotodo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[SP_CargaBodegadesechotodo]
as
select a.fecha_BodegaDesecho,a.observaciones_BodegaDesecho, b.nombre_Usuario, c.placa_Activo, c.descripcion  from BodegaDesecho a
inner join MUsuarios b on b.id_Usuario = a.id_Usuario
inner join Activos c on a.id_Activo = c.id_Activo





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaBodegas]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaBodegas]
as
select a.id_Oficina, a.coordinador_Oficina, a.nombre_Oficina, a.telefono_Oficina, a.correo_Oficina  from Oficina a
where a.es_bodega = 'True'




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaDatosParaReparacion]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaDatosParaReparacion]
@placa varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a where a.placa_Activo = @placa and a.id_EstadoActivo = 1))
begin
select b.placa_Activo, b.id_Activo, b.descripcion, c.nombre_modelo from MMarca a
inner join Activos b on a.id_Marca = b.id_Marca
inner join Modelo c on c.id_modelo = a.id_modelo
where b.id_EstadoActivo = 1 and b.placa_Activo = @placa
end
else
begin
set @Mensaje='No hay registros de activos con la placa ingresada y un estado de activo'
select @Mensaje as Mensaje
end
end
end





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaDatosReparar]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaDatosReparar]
@placa varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a where a.placa_Activo = @placa and a.id_EstadoActivo = 5))
begin
select b.placa_Activo, b.id_Activo, b.descripcion, c.nombre_modelo, d.nombre_Estado from MMarca a
inner join Activos b on a.id_Marca = b.id_Marca
inner join Modelo c on c.id_modelo = a.id_modelo
inner join Estado d on d.id_Estado = b.id_EstadoActivo
where b.id_EstadoActivo = 5 and b.placa_Activo = @placa
end
else
begin
set @Mensaje='No hay registros de activos a reparar con la placa ingresada'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaDesechados]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaDesechados]
as
select a.fecha_BodegaTotalConsultas, a.numeroBoleta, a.observaciones_BodegaTotalConsultas, b.placa_Activo, b.descripcion,c.nombre_Usuario from Desecho_TotalConsultas a
inner join Activos b on a.id_Activo = b.id_Activo
inner join MUsuarios c on c.id_Usuario = a.id_Usuario


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaDesechadosporplaca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaDesechadosporplaca]
@placa varchar(50)
as
select a.fecha_BodegaTotalConsultas, a.numeroBoleta, a.observaciones_BodegaTotalConsultas, b.placa_Activo, b.descripcion,c.nombre_Usuario from Desecho_TotalConsultas a
inner join Activos b on a.id_Activo = b.id_Activo
inner join MUsuarios c on c.id_Usuario = a.id_Usuario
where b.placa_Activo = @placa


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaDesechoFinal]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaDesechoFinal]
as
select a.fecha_BodegaDesechoTemporal, a.observaciones_BodegaDesechoTemporal,a.numeroBoleta, c.nombre_Usuario, b.placa_Activo from Desecho_Temporal a
inner join Activos b on a.id_Activo = b.id_Activo
inner join MUsuarios c on a.id_Usuario = c.id_Usuario




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaDevolucion]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaDevolucion]
@boleta varchar(50)
as
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Prestamo a where a.id_boleta = @boleta))
begin
select a.id_boleta, c.nombre_Funcionario, b.placa_Activo, b.descripcion, a.id_Activo, a.idip, c.plaza_Funcionario  from Prestamo a
inner join Activos b on a.id_Activo = b.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
where a.id_boleta = @boleta
end
else
begin
set @Mensaje='No hay registros de préstamos con ese numero de boleta'
select @Mensaje as Mensaje
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaFamilias]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaFamilias]
as
select a.id_Familia, a.nombre_Familia from Familia a



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaFuncionarios]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_CargaFuncionarios]
as
select a.plaza_Funcionario, a.nombre_Funcionario, c.nombre_Oficina, e.descripcion  from Funcionarios a
inner join Oficina c on a.id_Oficina = c.id_Oficina
inner join AsignaActivos d on d.id_Funcionario = a.id_Funcionario
inner join Activos e on e.id_Activo = d.id_Activo






GO
/****** Object:  StoredProcedure [dbo].[SP_CargaFuncionariosoficina]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaFuncionariosoficina]
@oficina varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Funcionarios a 
inner join Oficina b on b.nombre_Oficina = @oficina))
begin
select a.plaza_Funcionario, a.nombre_Funcionario, a.apellido_Funcionario, c.nombre_Oficina, a.correo_Funcionario, a.Puesto from Funcionarios a
inner join Oficina c on a.id_Oficina = c.id_Oficina 
where c.nombre_Oficina = @oficina
end
else
begin
set @Mensaje='No hay registros del funcionario ingresado'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaFuncionariosplaza]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaFuncionariosplaza]
@plaza varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Funcionarios a where a.plaza_Funcionario = @plaza ))
begin
select a.plaza_Funcionario, a.nombre_Funcionario, a.apellido_Funcionario, c.nombre_Oficina, a.correo_Funcionario, a.Puesto from Funcionarios a
inner join Oficina c on a.id_Oficina = c.id_Oficina 
where a.plaza_Funcionario= @plaza
end
else
begin
set @Mensaje='No hay registros del funcionario ingresado'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaFuncionariosTodos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaFuncionariosTodos]
as
select a.plaza_Funcionario, a.nombre_Funcionario, a.apellido_Funcionario, c.nombre_Oficina, a.correo_Funcionario, a.Puesto from Funcionarios a
inner join Oficina c on a.id_Oficina = c.id_Oficina



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaFuncionarioTraslado]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaFuncionarioTraslado]
@plaza varchar(50)
as
select a.id_Funcionario, a.nombre_Funcionario, a.plaza_Funcionario, b.nombre_Oficina from Funcionarios a
inner join Oficina b on a.id_Oficina = b.id_Oficina
where a.plaza_Funcionario = @plaza




GO
/****** Object:  StoredProcedure [dbo].[SP_Cargaid]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_Cargaid]
@placa varchar(50)
as
select a.id_Activo from AsignaActivos a
inner join Funcionarios b on a.id_Funcionario = b.id_Funcionario
inner join Activos c on c.id_Activo = a.id_Activo
where c.placa_Activo = @placa and c.id_EstadoActivo=1





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMMarca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaMMarca]
as
select a.id_Marca, b.nombre_Marca, c.nombre_modelo, d.nombre_Familia from MMarca a
inner join MarcaArticulo b on a.id_MarcaArticulo = b.id_MarcaArticulo
inner join Modelo c on a.id_modelo = c.id_modelo
inner join Familia d on d.id_Familia = a.id_Familia




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMMarcaPorFamilia]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaMMarcaPorFamilia]
@idfamilia int
as
select a.id_Marca, b.nombre_Marca, c.nombre_modelo, d.nombre_Familia from MMarca a
inner join MarcaArticulo b on a.id_MarcaArticulo = b.id_MarcaArticulo
inner join Modelo c on a.id_modelo = c.id_modelo
inner join Familia d on d.id_Familia = a.id_Familia
where d.id_Familia = @idfamilia




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMMarcaPorNombreMarca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaMMarcaPorNombreMarca]
@nombremarca varchar(50)
as
select a.id_Marca, b.nombre_Marca, c.nombre_modelo, d.nombre_Familia from MMarca a
inner join MarcaArticulo b on a.id_MarcaArticulo = b.id_MarcaArticulo
inner join Modelo c on a.id_modelo = c.id_modelo
inner join Familia d on d.id_Familia = a.id_Familia
where b.nombre_Marca = @nombremarca




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaModeloTabla]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaModeloTabla]
as
select a.id_Modelo, a.nombre_modelo from Modelo a
where a.Estado = 'Activo'


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaModeloTablaPorNombre]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaModeloTablaPorNombre]
@nombre varchar(50)
as
select a.id_Modelo, a.nombre_modelo from Modelo a
where a.Estado = 'Activo' and a.nombre_modelo = @nombre

GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMovimientoPorPlaca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaMovimientoPorPlaca]
@placa varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Registro_Movimientos x 
inner join Activos a on a.placa_Activo = @placa))
begin
select b.fecha_Registro_Movimientos, a.nombre_Movimientos, w.nombre_Usuario,q.placa_Activo, q.descripcion  from Registro_Movimientos b
inner join Movimientos a on a.id_Movimientos = b.id_Movimientos
inner join MUsuarios w on w.id_Usuario = b.id_Usuario
inner join Activos q on q.id_Activo = b.id_Activo
where q.placa_Activo = @placa
end
else
begin
set @Mensaje='No hay registros del movimiento ingresado'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMovimientos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaMovimientos]
as
select b.fecha_Registro_Movimientos, a.nombre_Movimientos, w.nombre_Usuario,q.placa_Activo, q.descripcion  from Registro_Movimientos b
inner join Movimientos a on a.id_Movimientos = b.id_Movimientos
inner join MUsuarios w on w.id_Usuario = b.id_Usuario
inner join Activos q on q.id_Activo = b.id_Activo





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMovimientosMovimiento]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaMovimientosMovimiento]
@movimiento varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Registro_Movimientos 
inner join Movimientos a on a.nombre_Movimientos  = @movimiento))
begin
select b.fecha_Registro_Movimientos, a.nombre_Movimientos, w.nombre_Usuario,q.placa_Activo, q.descripcion  from Registro_Movimientos b
inner join Movimientos a on a.id_Movimientos = b.id_Movimientos
inner join MUsuarios w on w.id_Usuario = b.id_Usuario
inner join Activos q on q.id_Activo = b.id_Activo
where a.nombre_Movimientos = @movimiento
end
else
begin
set @Mensaje='No hay registros del movimiento ingresado'
select @Mensaje as Mensaje
end
end
end






GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMovimientosMovimientouser]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaMovimientosMovimientouser]
@user varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Registro_Movimientos a
inner join MUsuarios b on b.nombre_Usuario= @user ))
begin
select b.fecha_Registro_Movimientos, a.nombre_Movimientos, w.nombre_Usuario,q.placa_Activo , q.descripcion  from Registro_Movimientos b
inner join Movimientos a on a.id_Movimientos = b.id_Movimientos
inner join MUsuarios w on w.id_Usuario = b.id_Usuario
inner join Activos q on q.id_Activo = b.id_Activo
where w.nombre_Usuario = @user
end
else
begin
set @Mensaje='No hay registros del usuario ingresado'
select @Mensaje as Mensaje
end
end
end







GO
/****** Object:  StoredProcedure [dbo].[SP_CargaMovimientosTodos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaMovimientosTodos]
as
select b.fecha_Registro_Movimientos, a.nombre_Movimientos, w.nombre_Usuario, q.descripcion,q.placa_Activo  from Registro_Movimientos b
inner join Movimientos a on a.id_Movimientos = b.id_Movimientos
inner join MUsuarios w on w.id_Usuario = b.id_Usuario
inner join Activos q on q.id_Activo = b.id_Activo





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaOficina]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_CargaOficina]
as
select a.nombre_Oficina, a.telefono_Oficina, a.correo_Oficina, a.correo_Oficina, b.nombre_Region from Oficina a
inner join Region b on a.id_Region = b.id_Region







GO
/****** Object:  StoredProcedure [dbo].[SP_CargaOficina2]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaOficina2]
@Region varchar(60)
as
select a.nombre_Oficina, a.telefono_Oficina, a.direccion_Oficina, a.correo_Oficina, b.nombre_Region from Oficina a
inner join Region b on  a.id_Region = b.id_Region
where b.nombre_Region = @Region





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaOficios]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaOficios]
as
select a.numero_Oficio, b.nombre_Oficina, a.numero_activo,a.Tipo_Equipo,a.Modelo, a.Descripcion from Oficio a
inner join Oficina b on a.Region_Destino = b.id_Oficina


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaOficiosporOficio]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaOficiosporOficio]
@oficio varchar(50)
as
select a.numero_Oficio, b.nombre_Oficina, a.numero_activo,a.Tipo_Equipo,a.Modelo, a.Descripcion from Oficio a
inner join Oficina b on a.Region_Destino = b.id_Oficina
where a.numero_Oficio = @oficio


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaParaReparar]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaParaReparar]
as
select a.numeroBoleta, a.FechaIngreso, a.ObservacionesReparacion, b.placa_Activo, b.descripcion from Reparaciones a
inner join Activos b on a.id_Activo = b.id_Activo




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaParaRepararporBoleta]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaParaRepararporBoleta]
@boleta varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Reparaciones a where a.numeroBoleta = @boleta))
begin
select a.numeroBoleta, a.FechaIngreso, a.ObservacionesReparacion, b.placa_Activo, b.descripcion from Reparaciones a
inner join Activos b on a.id_Activo = b.id_Activo
where a.numeroBoleta = @boleta
end

end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaParaRepararporPlaca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaParaRepararporPlaca]
@placa varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Activos a where a.placa_Activo = @placa and a.id_EstadoActivo = 5))
begin
select a.numeroBoleta, a.FechaIngreso, a.ObservacionesReparacion, b.placa_Activo, b.descripcion from Reparaciones a
inner join Activos b on a.id_Activo = b.id_Activo
where b.placa_Activo = @placa
end
else
begin
set @Mensaje='No hay registros de reparaciones con la placa ingresada'
select @Mensaje as Mensaje
end
end
end


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaPlacaActivoId]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaPlacaActivoId]
@id int
as
select a.id_Activo,a.placa_Activo from Activos a
where a.id_Activo = @id




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaPlazaFuncionario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaPlazaFuncionario]
@placa varchar(50)
as
select b.plaza_Funcionario, b.nombre_Funcionario from AsignaActivos a
inner join Funcionarios b on a.id_Funcionario = b.id_Funcionario
inner join Activos c on c.id_Activo = a.id_Activo
where c.placa_Activo = @placa





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaProveedor]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaProveedor]
as
select a.id_Proveedor, a.nombre_Proveedor,a.telefono_Proveedor, a.correo_Proveedor, a.observaciones_Proveedor from Proveedor a




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaProveedorporNombre]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaProveedorporNombre]
@nombre varchar(50)
as
select a.id_Proveedor, a.nombre_Proveedor,a.telefono_Proveedor, a.correo_Proveedor, a.observaciones_Proveedor from Proveedor a
where a.nombre_Proveedor = @nombre




GO
/****** Object:  StoredProcedure [dbo].[SP_CargarModeloMarca]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargarModeloMarca]
@idMarca int
as
select a.id_Marca, b.nombre_modelo, c.nombre_Marca from MMarca a, Modelo b, MarcaArticulo c
where  b.id_modelo = a.id_modelo and a.id_MarcaArticulo = c.id_MarcaArticulo
and a.id_Marca = @idMarca


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaSeguro]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaSeguro]
as
select a.id_aseguramiento, a.empresa_seguro, a.nombre_seguro, a.descripcion_seguro, a.correo_seguro from Aseguramiento a




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaSeguroIdnombre]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaSeguroIdnombre]
as
select a.id_aseguramiento, a.nombre_seguro from Aseguramiento a




GO
/****** Object:  StoredProcedure [dbo].[SP_CargaSpecsActivo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaSpecsActivo]
@placa varchar(50)
as
select CONCAT(d.nombre_Marca, ' ',c.nombre_modelo) as Modelo, a.id_Marca, e.id_Familia, b.serie_Activo,b.id_Activo,
CONCAT(c.Cantidad_Ram,' ', c.Procesador, ' ',c.Resolucion, ' ', c.Tipo_DiscoDuro,' ', c.Tipo_Impresora) as Specs, e.nombre_Familia  from MMarca a
inner join Activos b on a.id_Marca = b.id_Marca
inner join Modelo c on c.id_modelo = a.id_modelo
inner join MarcaArticulo d on d.id_MarcaArticulo = a.id_MarcaArticulo
inner join Familia e on e.id_Familia = a.id_Familia
where b.placa_Activo = @placa and b.id_EstadoActivo=3



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaTodasOficinas]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_CargaTodasOficinas]
as
select a.nombre_Oficina, a.telefono_Oficina, a.direccion_Oficina, a.correo_Oficina, b.nombre_Region from Oficina a
inner join Region b on b.id_Region = a.id_Region





GO
/****** Object:  StoredProcedure [dbo].[SP_CargaTodoslosPrestamos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaTodoslosPrestamos]
as
select a.fechaActual, a.id_boleta, d.nombre_Oficina, b.placa_Activo, c.plaza_Funcionario from Prestamo a
inner join Activos b on a.id_Activo = b.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
inner join Oficina d on d.id_Oficina = a.id_OficinaDestino
where b.id_EstadoActivo = 6



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaUserOcultar]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaUserOcultar]
as
select a.id_Usuario, a.nombre_Usuario from MUsuarios a
where a.Estado = 'Activo'



GO
/****** Object:  StoredProcedure [dbo].[SP_CargaUsuariosPorCorreo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaUsuariosPorCorreo]
@correo varchar(50)
as
select a.nombre_Usuario, a.Apellido_Usuario, a.correo_Usuario, b.nombre_Rol from MUsuarios a
inner join MRol b on a.id_Rol = b.id_Rol 
where a.correo_Usuario = @correo and a.Estado = 'Activo'


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaUsuariosPorRol]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaUsuariosPorRol]
@Rol int
as
select a.nombre_Usuario, a.Apellido_Usuario, a.correo_Usuario, b.nombre_Rol from MUsuarios a
inner join MRol b on a.id_Rol = b.id_Rol 
where b.id_Rol = @Rol and a.Estado = 'Activo'


GO
/****** Object:  StoredProcedure [dbo].[SP_CargaUsuariosTodos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CargaUsuariosTodos]
as
select a.nombre_Usuario, a.Apellido_Usuario, a.correo_Usuario, b.nombre_Rol from MUsuarios a
inner join MRol b on a.id_Rol = b.id_Rol 
where a.Estado = 'Activo'


GO
/****** Object:  StoredProcedure [dbo].[SP_ConsultaCorreoOficina]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_ConsultaCorreoOficina]
@Correo varchar(60)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Oficina a where correo_Oficina = @Correo))
begin
select a.nombre_Oficina, a.telefono_Oficina, a.direccion_Oficina, a.correo_Oficina, b.nombre_Region from Oficina a
inner join Region b on b.id_Region = a.id_Region
where a.correo_Oficina = @Correo
end
else
begin
set @Mensaje='El correo no existe o no lo dijitó correctamente'
select @Mensaje as Mensaje
end
end
end





GO
/****** Object:  StoredProcedure [dbo].[SP_DameFuncionarios]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_DameFuncionarios]
@Oficina int
as
begin


begin 
select * from Funcionarios where id_Oficina=@Oficina 
end 
end





GO
/****** Object:  StoredProcedure [dbo].[SP_DameMovimientos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_DameMovimientos]
as
begin
select id_Movimientos,nombre_Movimientos from Movimientos
end





GO
/****** Object:  StoredProcedure [dbo].[SP_DameOficinas]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_DameOficinas]
@Region int
as
begin


begin 
select * from Oficina where id_Region=@Region
end 
end





GO
/****** Object:  StoredProcedure [dbo].[SP_DameStock]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_DameStock]
as
select id_Activo, placa_Activo from Activos where id_EstadoActivo = 3







GO
/****** Object:  StoredProcedure [dbo].[SP_DesechoActivo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--
create procedure [dbo].[SP_DesechoActivo]
@id_Funcionario int, --presente Usuadas
@id_Activo int, --presente Usuadas
@id_Usuario int, --presente Usuadas
@ip int, 
@observaciones varchar(200)
as
begin
declare @Mensaje varchar(100) = 'Msj'
if(exists(select * from Activos where id_Activo= @id_Activo and id_EstadoActivo=1))
begin
set @Mensaje='Se ha Desechado Activo'
update Activos set id_EstadoActivo=2 where id_Activo = @id_Activo
update BodegaTransito set estado_BodegaTransito=2 where id_Activo=@id_Activo
insert into Registro_Movimientos values(GETDATE(),5,@id_Usuario,@id_Activo)
insert into BodegaDesecho values(2,GETDATE(),@observaciones,@id_Usuario,@id_Activo)
update Ips set ip_disponible=0 where id_ip=@ip
select @Mensaje as Mensaje
end
else
set @Mensaje='No se puede efectuar esta operacion'
select @Mensaje as Mensaje
end






GO
/****** Object:  StoredProcedure [dbo].[SP_DesechoTemporal]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_DesechoTemporal]
@idActivo int,
@idUsuario int,
@Observaciones varchar(200),
@fecha varchar(50),
@numboleta varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
if(exists(select * from Activos where id_Activo= @idActivo and id_EstadoActivo = 1))
begin
set @Mensaje='Activo enviado a desecho'
update Activos set ubicacion = 30 where id_Activo = @idActivo and id_EstadoActivo = 1
update Activos set id_EstadoActivo = 2 where id_Activo = @idActivo
insert into Desecho_Temporal values(@fecha,@Observaciones,@numboleta, @idUsuario, @idActivo)
insert into Desecho_TotalConsultas values(@fecha,@Observaciones,@numboleta, @idUsuario, @idActivo)
insert into Registro_Movimientos values(GETDATE(),5,@idUsuario,@idActivo)
update Ips set ip_disponible = 1 from AsignaActivos x inner join Ips y on x.id_ip = y.id_ip
where id_Activo = @idActivo
select @Mensaje as Mensaje
end
else
set @Mensaje='Error, no se pudo enviar el activo a desecho'
select @Mensaje as Mensaje
end
GO
/****** Object:  StoredProcedure [dbo].[SP_DevolverPrestamo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_DevolverPrestamo]
@num_boleta varchar(60),
@placa varchar(50),
@id_Usuario int,
@id_Activo int,
@id_ip int
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @variableactivo int
if(exists(select * from Prestamo where id_boleta= @num_boleta))
begin
select @variableactivo = id_Activo from Activos where placa_Activo = @placa
set @Mensaje='El activo fue devuelto de forma correcta'
update Activos set id_EstadoActivo=3 where placa_Activo = @placa
insert into Registro_Movimientos values(GETDATE(),8,@id_Usuario,@id_Activo)
delete from Prestamo where id_boleta = @num_boleta
if(exists(select * from Ips where id_ip= @id_ip))
update Ips set ip_disponible=0 where id_ip=@id_ip
select @Mensaje as Mensaje
end
else
set @Mensaje='No hay un prestamo con esa boleta'
select @Mensaje as Mensaje
end



GO
/****** Object:  StoredProcedure [dbo].[SP_EliminarFuncionario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_EliminarFuncionario]
@correo varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin
if(exists(select * from Funcionarios where correo_Funcionario = @correo))
begin
delete from Funcionarios where correo_Funcionario = @correo
set @Mensaje='Funcionario Eliminado'
select @Mensaje as Mensaje
---
end
else
begin
set @Mensaje='No se pudo eliminar el funcionario o no existe'
select @Mensaje as Mensaje
end
end
end

--exec SP_EliminarUsuario 'oscarlopez@gmail.com'






GO
/****** Object:  StoredProcedure [dbo].[SP_EliminarOficina]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_EliminarOficina]
@nombreoficina varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin
if(exists(select * from Oficina where nombre_Oficina = @nombreoficina))
begin
delete from Oficina where nombre_Oficina = @nombreoficina
set @Mensaje='Oficina Eliminado'
select @Mensaje as Mensaje
---
end
else
begin
set @Mensaje='No se pudo eliminar la oficina o no existe'
select @Mensaje as Mensaje
end
end
end







GO
/****** Object:  StoredProcedure [dbo].[SP_EliminarProveedor]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_EliminarProveedor]
@nombreproveedor varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'

begin
if(exists(select * from Proveedor where nombre_Proveedor = @nombreproveedor))
begin
delete from Proveedor where nombre_Proveedor = @nombreproveedor
set @Mensaje='Proveedor Eliminado'
select @Mensaje as Mensaje
---
end
else
begin
set @Mensaje='No se pudo eliminar el proveedor o no existe'
select @Mensaje as Mensaje
end
end
end






GO
/****** Object:  StoredProcedure [dbo].[SP_EliminarUsuario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_EliminarUsuario]
@correo varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin
if(exists(select * from MUsuarios where correo_Usuario = @correo))
begin
delete from MUsuarios where correo_Usuario = @correo
set @Mensaje='Usuario Eliminado'
select @Mensaje as Mensaje
---
end
else
begin
set @Mensaje='No se pudo eliminar el usuario o no existe'
select @Mensaje as Mensaje
end
end
end






GO
/****** Object:  StoredProcedure [dbo].[SP_EnvioReparacion]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_EnvioReparacion]
@idActivo int,
@idUsuario int,
@Observaciones varchar(200),
@fecha varchar(50),
@numboleta varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
if(exists(select * from Activos where id_Activo= @idActivo and id_EstadoActivo = 1))
begin
set @Mensaje='Activo enviado a reparacion'
update Activos set id_EstadoActivo = 5
where id_Activo = @idActivo and id_EstadoActivo = 1
insert into Reparaciones values(@fecha,@Observaciones,@numboleta, @idUsuario, @idActivo)
insert into Registro_Movimientos values(GETDATE(),2,@idUsuario,@idActivo)
select @Mensaje as Mensaje
end
else
set @Mensaje='Error, no se pudo enviar el activo a reparacion'
select @Mensaje as Mensaje
end




GO
/****** Object:  StoredProcedure [dbo].[SP_FiltraActivoFamilia]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_FiltraActivoFamilia]
@idfamilia int
as
select a.id_Activo, a.placa_Activo from Activos a
inner join MMarca b on a.id_Marca = b.id_Marca
inner join Familia c on c.id_Familia = b.id_Familia
where b.id_Familia = @idfamilia and id_EstadoActivo=3





GO
/****** Object:  StoredProcedure [dbo].[SP_FiltraActivos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_FiltraActivos]
@id int
as
begin
declare @Mensaje varchar(100) = 'Msj'
if(exists(select a.id_Familia from MMarca a
inner join Activos b on a.id_Marca = b.id_Marca
where b.id_Activo = @id and a.id_Familia = 1 or a.id_Familia = 4 or a.id_Familia =3 ))
begin
set @Mensaje='Si'
select placa_Activo, descripcion, @Mensaje as Mensaje from  Activos where id_Activo = @id
end
else
begin
set @Mensaje='No'
select placa_Activo, descripcion, @Mensaje as Mensaje from  Activos where id_Activo = @id
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_FiltraFuncionario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_FiltraFuncionario]
@Region int
as
begin

declare @Oficina varchar(60)
begin 
select @Oficina = id_Oficina from Oficina where id_Region = @Region
select id_Funcionario, nombre_Funcionario from Funcionarios where id_Oficina = @Oficina
end 
end








GO
/****** Object:  StoredProcedure [dbo].[Sp_filtraporfamilia]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Sp_filtraporfamilia]
@IDFamilia int
as
select  id_Marca,c.nombre_Marca, b.nombre_modelo from  MMarca a 
inner join Modelo b on a.id_modelo = b.id_modelo
inner join MarcaArticulo c on c.id_MarcaArticulo = a.id_MarcaArticulo
where a.id_Familia = @IDFamilia and b.Estado = 'Activo'


GO
/****** Object:  StoredProcedure [dbo].[SP_IngresaActivos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SP_IngresaActivos]
@ubicacion_bodega int,
@placa_Activo varchar(60),
@serie_Activo varchar(60),
@id_EstadoActivo int, 
@fechaAdqui_Activo varchar(50), 
@fechaVencimientoGarantia_Activo varchar(50),
@id_Marca int,
@id_Proveedor int,
@id_Usuario int,
@id_licitacion varchar(60),
@precio_activo varchar(50),
@seguro_activo int,
@descripcion varchar(100),
@es_poliza bit
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin

if(exists(select * from Activos where placa_Activo = @placa_Activo))
begin
set @Mensaje='El Numero de Placa Ya esta registrado'
select @Mensaje as Mensaje
---
end
else
begin
insert into Activos values(@ubicacion_bodega,@placa_Activo,@serie_Activo,3,@fechaVencimientoGarantia_Activo,@fechaAdqui_Activo,@id_Marca,@id_Proveedor,@id_licitacion,@precio_activo,@seguro_activo,@descripcion,@es_poliza )--licitacion
 --set @Variable = SELECT Top 1 id_Activo FROM activos ORDER BY id_Activo DESC
SELECT @Variable = id_Activo  FROM Activos WHERE serie_Activo = @serie_Activo
insert into Registro_Movimientos values(GETDATE(),1,@id_Usuario,@Variable) --este actualizarlo luego
set @Mensaje='Activo Registrado'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_IngresaActivosExcel]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SP_IngresaActivosExcel]
@ubicacion_bodega int,
@placa_Activo varchar(60),
@serie_Activo varchar(60),
@id_EstadoActivo int, 
@fechaAdqui_Activo varchar(50), 
@fechaVencimientoGarantia_Activo varchar(50),
@id_Marca int,
@id_Proveedor int,
@id_Usuario int,
@id_licitacion varchar(60),
@precio_activo varchar(50),
@seguro_activo int,
@descripcion varchar(100),
@es_poliza bit
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin

if(exists(select * from Activos where placa_Activo = @placa_Activo))
begin
set @Mensaje='Problemas al registrar el excel, activo duplicado'
select @Mensaje as Mensaje,@placa_Activo as Placa, @descripcion as Descripcion

---
end
else
begin
insert into Activos values(@ubicacion_bodega,@placa_Activo,@serie_Activo,3,@fechaAdqui_Activo,@fechaVencimientoGarantia_Activo,@id_Marca,@id_Proveedor,@id_licitacion,@precio_activo,@seguro_activo,@descripcion,@es_poliza )--licitacion
 --set @Variable = SELECT Top 1 id_Activo FROM activos ORDER BY id_Activo DESC
SELECT @Variable = id_Activo  FROM Activos WHERE serie_Activo = @serie_Activo
insert into Registro_Movimientos values(GETDATE(),1,@id_Usuario,@Variable) --este actualizarlo luego

set @Mensaje='Activo registrado correctamente'
select @Mensaje as Mensaje,@placa_Activo as Placa, @descripcion as Descripcion

end
end
end




GO
/****** Object:  StoredProcedure [dbo].[SP_IngresaFamilia]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_IngresaFamilia]
@NombreFamilia varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin

if(exists(select * from Familia where nombre_Familia = @NombreFamilia))
begin
set @Mensaje='La familia ya existe o no se pudo ingresar'
select @Mensaje as Mensaje
---
end
else
begin
insert into Familia values(@NombreFamilia)
set @Mensaje='Familia ingresada de forma correcta'
select @Mensaje as Mensaje
end
end
end







GO
/****** Object:  StoredProcedure [dbo].[Sp_IngresaFuncionario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Sp_IngresaFuncionario]
@nombrefuncionario varchar(50),
@apellidofuncionario varchar(50),
@correofuncionario varchar(50),
@oficinafuncionario int,
@plazafuncionario varchar(50),
@puesto varchar(50),
@FechaDesde varchar(50),
@NumeroEmpleado varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Funcionarios where correo_Funcionario = @correofuncionario))
begin
set @Mensaje='El Funcionario ya se encuentra registrado'
select @Mensaje as Mensaje
---
end
else 
begin
insert into Funcionarios values (@nombrefuncionario, @apellidofuncionario,@correofuncionario,@oficinafuncionario,@plazafuncionario,@puesto,@FechaDesde,@NumeroEmpleado)
set @Mensaje='Funcionario agregado exitosamente!!!'
select @Mensaje as Mensaje
end 
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_IngresaModelo2]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_IngresaModelo2]
@nombremodelo varchar(50),
@tipodisco varchar(60),
@ram varchar(60),
@idmarca int, 
@idproveedor int,
@procesador varchar(50),
@pulgadas varchar(50),
@tipoimpresora varchar(50),
@resolucion varchar(50),
@descripcion varchar(50),
@idfamilia int
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @variable int = 0
begin
if(exists(select * from Modelo where nombre_modelo = @nombremodelo))
begin
set @Mensaje='El modelo ya se encuentra registrado'
select @Mensaje as Mensaje
---
end
else 
begin
insert into Modelo values(@nombremodelo,@tipodisco,@ram,@idmarca,@idproveedor,@procesador,@pulgadas,@tipoimpresora,@resolucion,@descripcion,'Activo')--licitacion
select @variable = id_modelo from Modelo where nombre_modelo = @nombremodelo
insert into MMarca values (@variable,@idmarca,@idfamilia)
set @Mensaje='Modelo ingresado de forma correcta'
select @Mensaje as Mensaje
end 
end
end


GO
/****** Object:  StoredProcedure [dbo].[SP_IngresaOficio]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_IngresaOficio]
@NumOficio varchar(50),
@RegionSalida int,
@RegionEntrada int,
@TipoEquipo varchar(50),
@Modelo varchar(100),
@Descripcion varchar(50),
@Placaactivo varchar(50),
@SerieActivo varchar(50),
@CorreoDestino varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin
if(exists(select * from Oficio where numero_activo  = @Placaactivo))
begin
set @Mensaje='El activo ya se agregó a un oficio'
select @Mensaje as Mensaje
---
end
else
begin
insert into Oficio values(@NumOficio,@RegionSalida,@RegionEntrada,@TipoEquipo,@Modelo,@Descripcion,@Placaactivo,@SerieActivo,@CorreoDestino)
set @Mensaje='Oficio ingresado de forma correcta'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_IngresarIP]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_IngresarIP]
@ip varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin

if(exists(select * from Ips where ip_valor = @ip))
begin
set @Mensaje='La direccion IP ya existe o no se pudo ingresar'
select @Mensaje as Mensaje
---
end
else
begin
insert into Ips values(@ip, 0)
set @Mensaje='Direccion IP ingresada de forma correcta'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_IngresarMarcaArticulo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_IngresarMarcaArticulo]
@nombremarca varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin

if(exists(select * from MarcaArticulo where nombre_Marca = @nombremarca))
begin
set @Mensaje='La marca ya existe o no se pudo ingresar'
select @Mensaje as Mensaje
---
end
else
begin
insert into MarcaArticulo values(@nombremarca)
set @Mensaje='Marca ingresada de forma correcta'
select @Mensaje as Mensaje
end
end
end







GO
/****** Object:  StoredProcedure [dbo].[SP_IngresarOficina]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
----
create proc [dbo].[SP_IngresarOficina]
@esbodega bit,
@nombreoficina varchar(50),
@coordinadoroficina varchar(50),
@telefonooficina varchar(50),
@correooficina varchar(50),
@direccion varchar(50),
@observaciones varchar(50),
@idregion int
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Oficina where nombre_Oficina = @nombreoficina))
begin
set @Mensaje='La oficina ya se encuentra registrado'
select @Mensaje as Mensaje
---
end
else 
begin
insert into Oficina values (@esbodega, @nombreoficina,@coordinadoroficina,@telefonooficina,@correooficina,@direccion,@observaciones,@idregion)
set @Mensaje='Oficina agregada exitosamente!!!'
select @Mensaje as Mensaje
end 
end
end







GO
/****** Object:  StoredProcedure [dbo].[SP_IngresarProveedor]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
CREATE proc [dbo].[SP_IngresarProveedor]
@nombreproveedor varchar(50),
@telefonoproveedor varchar(50),
@correoproveedor varchar(50),
@direccionproveedor varchar(50),
@observacionesproveedor varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Proveedor where correo_Proveedor = @correoproveedor))
begin
set @Mensaje='El proveedor ya se encuentra registrado'
select @Mensaje as Mensaje
---
end
else 
begin
insert into Proveedor values (@nombreproveedor, @telefonoproveedor,@correoproveedor,@direccionproveedor,@observacionesproveedor)
set @Mensaje='Proveedor agregado exitosamente!!!'
select @Mensaje as Mensaje
end 
end
end








GO
/****** Object:  StoredProcedure [dbo].[SP_IngresarRegion]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
CREATE procedure [dbo].[SP_IngresarRegion]
@nombreregion varchar(50),
@direccionregion varchar(60),
@correoregion varchar(60),
@telefonoregion varchar(60), 
@observaciones varchar(60)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin

if(exists(select * from Region where nombre_Region = @nombreregion))
begin
set @Mensaje='Problemas al ingresar la region'
select @Mensaje as Mensaje
---
end
else
begin
insert into Region values(@nombreregion,@direccionregion,@correoregion,@telefonoregion,@observaciones)--licitacion
 --set @Variable = SELECT Top 1 id_Activo FROM activos ORDER BY id_Activo DESC
--SELECT @Variable = id_Activo  FROM Activos WHERE serie_Activo = @serie_Activo
--insert into Registro_Movimientos values(GETDATE(),1,@id_Usuario,@Variable) --este actualizarlo luego
set @Mensaje='Region ingresada de forma correcta'
select @Mensaje as Mensaje
end
end
end








GO
/****** Object:  StoredProcedure [dbo].[SP_IngresaSeguro]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
CREATE proc [dbo].[SP_IngresaSeguro]

@nombreseguro varchar(50),
@empresaseguro varchar(50),
@telefonoseguro varchar(50),
@correoseguro varchar(50),
@direccionseguro varchar(50),
@descripcionseguro varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Aseguramiento where nombre_seguro = @nombreseguro))
begin
set @Mensaje='El seguro no se pudo ingresar o ya existe'
select @Mensaje as Mensaje
---
end
else 
begin
insert into Aseguramiento values (@nombreseguro, @empresaseguro,@telefonoseguro,@correoseguro,@direccionseguro, @descripcionseguro)
set @Mensaje='Seguro agregado exitosamente!!!'
select @Mensaje as Mensaje
end 
end
end

--exec SP_IngresaSeguro 'Seguro3123', 'INS','22345678','segurosins@gmail.com', 'Calle 32', 'Seguro total, paga todo'







GO
/****** Object:  StoredProcedure [dbo].[Sp_IngresaUsuario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Sp_IngresaUsuario]
@nombreusuario varchar(50),
@apellidousuario varchar(50),
@correousuario varchar(50),
@contrasenausuario varchar(50),
@region int,
@rol int
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from MUsuarios where nombre_Usuario = @nombreusuario))
begin
set @Mensaje='El Usuario ya se encuentra registrado'
select @Mensaje as Mensaje
---
end
else
begin
insert into MUsuarios values (@nombreusuario, @apellidousuario,@correousuario,@contrasenausuario,@region ,@rol,'Activo')
set @Mensaje='Usuario agregado exitosamente!!!'
select @Mensaje as Mensaje
end
end
end


GO
/****** Object:  StoredProcedure [dbo].[SP_Ips]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SP_Ips]
as
begin
select id_ip,ip_valor from Ips where ip_disponible=0
select * from Ips
end




GO
/****** Object:  StoredProcedure [dbo].[SP_IpsDisponibles]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_IpsDisponibles]
as
begin
select id_ip,ip_valor from Ips where ip_disponible='false'
end





GO
/****** Object:  StoredProcedure [dbo].[SP_LimpiarDesecho]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_LimpiarDesecho]
as
delete from Desecho_Temporal




GO
/****** Object:  StoredProcedure [dbo].[SP_Marcas]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create procedure [dbo].[SP_Marcas]
as
begin
select * from MarcaArticulo
end






GO
/****** Object:  StoredProcedure [dbo].[SP_Modelo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SP_Modelo]
as
begin
select id_modelo,nombre_modelo from Modelo
where Modelo.Estado = 'Activo'
end


GO
/****** Object:  StoredProcedure [dbo].[Sp_ObtenerActivoFamilia]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[Sp_ObtenerActivoFamilia]
@IDFamilia int
as
select  a.id_Activo, a.placa_Activo, a.descripcion from  Activos a 
inner join MMarca b on a.id_Marca = b.id_Marca
where b.id_Familia = @IDFamilia






GO
/****** Object:  StoredProcedure [dbo].[SP_OcultarModelo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_OcultarModelo]
@idmodel int
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin
if(exists(select * from Modelo where id_modelo = @idmodel and Modelo.Estado = 'Activo'))
begin
UPDATE  Modelo   
    SET Estado = 'Inactivo'
where Modelo.id_Modelo = @idmodel
DELETE FROM MMarca
WHERE id_modelo = @idmodel;
set @Mensaje='Modelo eliminado satisfactoriamente'
select @Mensaje as Mensaje
---
end
else
begin
set @Mensaje='Problemas al eliminar el modelo'
select @Mensaje as Mensaje
end
end
end


GO
/****** Object:  StoredProcedure [dbo].[SP_OcultarUsuario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_OcultarUsuario]
@iduser int
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin
if(exists(select * from MUsuarios where id_Usuario = @iduser and MUsuarios.Estado = 'Activo'))
begin
UPDATE  MUsuarios   
    SET Estado = 'Inactivo'
where MUsuarios.id_Usuario = @iduser
set @Mensaje='Usuario eliminado satisfactoriamente'
select @Mensaje as Mensaje
---
end
else
begin
set @Mensaje='Problemas al eliminar el Usuario'
select @Mensaje as Mensaje
end
end
end


GO
/****** Object:  StoredProcedure [dbo].[SP_OcupaIP2]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_OcupaIP2]
@id int
as
declare @Mensaje varchar(100) = 'Msj'
if(exists(select a.id_Familia from MMarca a
inner join Activos b on a.id_Marca = b.id_Marca
where b.id_Activo = @id and a.id_Familia = 1 or a.id_Familia = 4 or a.id_Familia =3 ))
begin
set @Mensaje='Si'
select @Mensaje as Mensaje
end
else
set @Mensaje='No'
select @Mensaje as Mensaje



GO
/****** Object:  StoredProcedure [dbo].[SP_Polizas]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_Polizas]
as
begin
select id_aseguramiento,nombre_seguro from Aseguramiento
end





GO
/****** Object:  StoredProcedure [dbo].[SP_PrestamoActivo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SP_PrestamoActivo]
@id_Activo int,
@id_Funcionario int,
@num_boleta varchar(60),
@id_Regiondestino int,
@id_OficinaDestino int,
@id_Usuario int,
@fechaentrega date,
@idip  int
as
begin
declare @Mensaje varchar(100) = 'Msj'
if(exists(select * from Activos where id_Activo= @id_Activo and (id_EstadoActivo=3)))
begin
set @Mensaje='El activo fue prestado de forma correcta'
select @Mensaje as Mensaje
update Activos set id_EstadoActivo=6 where id_Activo = @id_Activo
update Activos set ubicacion=@id_OficinaDestino where id_Activo = @id_Activo
update BodegaTransito set estado_BodegaTransito=1,fechaCambi_BodegaTransito=GETDATE() where id_Activo=@id_Activo
insert into Registro_Movimientos values(GETDATE(),7,@id_Usuario,@id_Activo)
insert into Prestamo values(@id_Activo,@id_Funcionario,@num_boleta,@id_Regiondestino,@id_OficinaDestino,@id_Usuario,GETDATE(),@fechaentrega,@idip)
if(exists(select * from Ips where id_ip= @idip))
update Ips set ip_disponible=1 where id_ip=@idip
end
else
begin
set @Mensaje='EL activo no se encuentra disponible para prestamo'
select @Mensaje as Mensaje
end
end


GO
/****** Object:  StoredProcedure [dbo].[SP_Prestamos]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_Prestamos]
@numboleta varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Prestamo  where id_boleta = @numboleta))
begin
select a.fechaActual, a.id_boleta, d.nombre_Oficina, b.placa_Activo, c.plaza_Funcionario, c.nombre_Funcionario from Prestamo a
inner join Activos b on a.id_Activo = b.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
inner join Oficina d on d.id_Oficina = a.id_OficinaDestino
where b.id_EstadoActivo=6 and a.id_boleta = @numboleta
end
else
begin
set @Mensaje='El numero de boleta no existe o no lo digitó correctamente'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_PrestamosFecha]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_PrestamosFecha]
@fecha varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
begin
if(exists(select * from Prestamo  where fechaActual = @fecha))
begin
select a.fechaActual, a.id_boleta, d.nombre_Oficina, b.placa_Activo, c.plaza_Funcionario, c.nombre_Funcionario from Prestamo a
inner join Activos b on a.id_Activo = b.id_Activo
inner join Funcionarios c on c.id_Funcionario = a.id_Funcionario
inner join Oficina d on d.id_Oficina = a.id_OficinaDestino
where b.id_EstadoActivo = 6 and a.fechaActual = @fecha
end
else
begin
set @Mensaje='La Fecha no coicide con niguna fecha'
select @Mensaje as Mensaje
end
end
end



GO
/****** Object:  StoredProcedure [dbo].[SP_Regiones]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
---
create proc [dbo].[SP_Regiones]
as 
begin
select *from Region
end 







GO
/****** Object:  StoredProcedure [dbo].[SP_RepararActivo]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_RepararActivo]
@idActivo int,
@idUsuario int,
@Observaciones varchar(200),
@fecha varchar(50),
@numboleta varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
if(exists(select * from Activos where id_Activo= @idActivo and id_EstadoActivo = 5))
begin
set @Mensaje='Activo reparado'
update Activos set id_EstadoActivo = 1
where id_Activo = @idActivo and id_EstadoActivo = 5
insert into ActivosReparados values(@fecha,@Observaciones,@numboleta, @idUsuario, @idActivo)
insert into Registro_Movimientos values(GETDATE(),9,@idUsuario,@idActivo)
delete from Reparaciones where numeroBoleta = @numboleta
select @Mensaje as Mensaje
end
else
set @Mensaje='Error, no se pudo reparar el activo'
select @Mensaje as Mensaje
end



GO
/****** Object:  StoredProcedure [dbo].[SP_TrasladoFuncionario]    Script Date: 1/12/2020 15:39:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_TrasladoFuncionario]
@NuevaOficina int,
@idFuncionario int,
@boleta varchar(50)
as
begin
declare @Mensaje varchar(100) = 'Msj'
declare @Variable int = 0
begin

if(exists(select * from Funcionarios where id_Funcionario = @idFuncionario))
begin
update Activos
set Activos.ubicacion = @NuevaOficina
from Activos inner join AsignaActivos on AsignaActivos.id_Activo = Activos.id_Activo
inner join Funcionarios on AsignaActivos.id_Funcionario = Funcionarios.id_Funcionario
where Activos.id_Activo = AsignaActivos.id_Activo and AsignaActivos.id_Funcionario = @idFuncionario
and Activos.id_EstadoActivo = 1
update Funcionarios 
set id_Oficina = @NuevaOficina where id_Funcionario = @idFuncionario
insert into Traslados values(@boleta,@idFuncionario,@NuevaOficina,GETDATE())
set @Mensaje = 'Funcionario traslado de forma correcta'
select @Mensaje as Mensaje
---
end
else
begin
set @Mensaje='No se pudo trasladar el funcionario'
select @Mensaje as Mensaje
end
end
end


GO
