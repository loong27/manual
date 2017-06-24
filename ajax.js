$.ajax({
                url: core.getUrl('goods/package/option',{pid:packageid,goodsid:goodsid}),    //请求的url地址
                dataType: "json",   //返回格式为json
                async: true, //请求是否异步，默认为异步，这也是ajax重要特性
                type: "GET",   //请求方式
                beforeSend: function() {
                    //请求前的处理
                },
                success: function(data) {
                    if(data.status > 0){
                        console.log(data.result);
                        var option = data.result;
                        var html = '';
                        for (var o in option) {
                            if(option[o].optionid){
                                console.log(option[o].title);
                                html += "<i class='package-i' data-optionid='"+option[o].optionid+"' data-price='"+option[o].packageprice+"' data-goodsid='"+goodsid+"'>"+option[o].title+"</i>";
                            }
                        }
                        $(".dispatching-info").html(html);
                    }else{
                        $(".dispatching-info").html('暂无规格！');
                    }


                    if(default_option){
                        $(".package-i").each(function(){
                            if($(this).attr("data-optionid")==default_option){
                                $(this).addClass("active");
                            }
                        })
                    }

                    //请求成功时处理
                    $(".package-i").on("click",function(){
                        $(".package-i").removeClass("active");
                        var goodsid = $(this).addClass("active").attr("data-goodsid");
                        var optionid = $(this).attr("data-optionid");
                        var packageprice = $(this).attr("data-price");
                        var option = $(this).html();
                        $(".packoption"+goodsid+"").html(option);
                        $(".marketprice"+goodsid+"").html(packageprice);
                        $(".inputoption"+goodsid+"").val(optionid);
                        var totalprice = 0;
                        $(".marketprice").each(function(){
                           totalprice += parseFloat($(this).html());
                        });
                        $(".totalprice").html(totalprice.toFixed(2));


                    });
                },
                complete: function() {
                    //请求完成的处理
                },
                error: function() {
                    //请求出错处理
                }
            });