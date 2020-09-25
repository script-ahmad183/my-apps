'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
}

//respon nested detail produk
exports.okdetailproduk = function(values, res){
    const hasilproduk = values.reduce((akumulasikan, item)=>{
        if(akumulasikan[item.nama_produk]){
            const group = akumulasikan[item.nama_produk];
            if(Array.isArray(group.sku)){
                group.sku.push(item.sku);
            }else{
                group.sku = [group.sku, item.sku];
            }
            if(Array.isArray(group.warna)){
                group.warna.push(item.warna);
            }else{
                group.warna = [group.warna, item.warna];
            }
            if(Array.isArray(group.ukuran)){
                group.ukuran.push(item.ukuran);
            }else{
                group.ukuran = [group.ukuran, item.ukuran];
            }
            if(Array.isArray(group.harga)){
                group.harga.push(item.harga);
            }else{
                group.harga = [group.harga, item.harga];
            }
            if(Array.isArray(group.stok)){
                group.stok.push(item.stok);
            }else{
                group.stok = [group.stok, item.stok];
            }
            if(Array.isArray(group.gambar)){
                group.gambar.push(item.gambar);
            }else{
                group.gambar = [group.gambar, item.gambar];
            }
        }else{
            akumulasikan[item.nama_produk] = item;
        }

        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasilproduk
    };

    res.json(data);
    res.end();
}