﻿$(document).ready(function () {

    $('#TableAnggota').DataTable({
        ajax: {
            url: `https://localhost:7189/api/User/GetAdminandPetugas`,
            dataSrc: `data`,
            "headers": {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            "type": "GET"

        },
        columns: [
            {
                data: null,
                render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            },
            { data: 'nomorAnggota', },
            { data: 'nama', },
            {
                data: 'tglLahir', /*render: $.fn.dataTable.render.moment( 'M/D/YYYY' )*/
                //"render": function (data, type, row, meta) {

                //    return `<p>${data.format('D-MM-YYYY')}</p>`;
                //}  
            },
            { data: 'pekerjaan', },
            { data: 'tglEntry', },
            {
                data: 'status',
                "render": function (data, type, row, meta) {
                    if (row.status == 'Aktif') {
                        return `
                    <span class='badge badge-success'>Aktif</span>
                    `;
                    } else {
                        return `
                    <span class='badge badge-danger'>Keluar</span>
                    `;
                    }

                }
            },
            {
                data: null,
                "render": function (data, type, row, meta) {

                    if (row.status == 'Aktif') {
                        return `
                    <div class="btn-group align-items-center" role="group">
					<a href="#editModalAnggota" title="Edit Data" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#editModalAnggota"><i class="fa fa-edit"></i></a>
                    <a title="Keluarkan Anggota" href="#" class="btn btn-primary btn-sm"><i class="fa fa-sign-out-alt"></i></a>	
					</div>
                    `;
                    } else {
                        return `
                    <span class='badge badge-secondary'>Tidak Tersedia</span>
                    `;
                    }
                }
            }

        ],
        columnDefs: [
            // Center align the header content of column 1
            { className: "dt-head-center", targets: "_all" },
            // Center align the body content of columns 2, 3, & 4
            { className: "dt-body-center", targets: "_all" }
        ]
    })

    $('#button1').
});

function addAnggota() {
    let data = new Object();
    let id = 0;
    let nomor_anggota = "";
    let nama = $('#nama_anggota').val();
    let email = $('#email_anggota').val();
    let username = $('#username_anggota').val();
    let password = "";
    let alamat = $('#alamat_anggota').val();
    let jk = $('#jenis_kelamin').val();
    let pekerjaan = $('#pekerjaan_anggota').val();
    let tgl_masuk = $('#tgl_masuk').val();
    let idRole = 3;
    let telpon = $('#telpon_anggota').val();
    let lahir = $('#tmp_lahir').val();
    let tgl_lahir = new Date($('#tgl_lahir').val()).toLocaleDateString() + " 02:26:42";
    let status = "";
    let u_entry = $('#u_entry').val();
    let tgl_entry = $('#tgl_entry').val();

    data.idUser = id;
    data.nomorAnggota = nomor_anggota;
    data.nama = nama;
    data.email = email;
    data.userName = username;
    data.password = password;
    data.alamat = alamat;
    data.jenisKelamin = jk;
    data.pekerjaan = pekerjaan;
    data.tglMasuk = tgl_masuk;
    data.idRole = idRole;
    data.telepon = telpon;
    data.tempatLahir = lahir;
    data.tglLahir = tgl_lahir;
    data.status = status;
    data.userEntry = u_entry;
    data.tglEntry = tgl_entry;

    console.log(data);
    $.ajax({
        url: `https://localhost:7189/api/User`,
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        headers: {
            'Content-Type': 'application/json'
        },
        success: function () {
            Swal.fire({
                icon: 'success',
                title: 'Data Berhasil Ditambahkan',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function () {
                location.reload();
            }, 1500);
        }
    });

    $()
}