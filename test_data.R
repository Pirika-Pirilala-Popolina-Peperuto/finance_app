
product <- data.frame(product_id = c("4a3ba418-1fab-4047-a195-dd31daa35967"
                                      ,"86fcb02c-292c-42a1-a216-560b34f779eb"
                                      ,"3a59eecf-b367-466f-b973-2a063db900a0"
                                      ,"c1745aee-58c8-490f-95f8-a3627620ebf4"),
                      name = c("偷竊", "驅魔術", "爆裂魔法", "物理抗性"),
                      description = c("運氣也好，則偷竊成功機率越高", 
                                      "大幅度傷害指定不死系怪物和惡魔",
                                      "爆裂魔法是究級的破壞魔法。其本質是純粹的魔力的擴散與爆炸，是能對一切存在造成傷害的最強攻擊魔法",
                                      "對所有的物理攻擊降低傷害"),
                      price = c(200, 2000, 5000, 500),
                      picture_id = c("1c547261-e402-4992-b9b5-aedf3ba9eff9"
                                     ,"aded7b4a-3cf5-4889-bf01-6f09a78f0e9d"
                                     ,"037f0bd1-40e6-4139-abc8-d05d7b6e4d80"
                                     ,"39f2dcde-a1a3-4f40-94c3-86cca92b9999"),
                      quantity = c(100, 100, 100, 100))
write.csv(product, "./csv/product.csv", row.names = FALSE)

product_catagory <- data.frame(
  product_id = c("4a3ba418-1fab-4047-a195-dd31daa35967"
                 ,"86fcb02c-292c-42a1-a216-560b34f779eb"
                 ,"3a59eecf-b367-466f-b973-2a063db900a0"
                 ,"c1745aee-58c8-490f-95f8-a3627620ebf4"),
  catagory = c("常見魔法", "牧師魔法", "法師魔法", "坦克魔法")
)
write.csv(product_catagory, "./csv/product_catagory.csv", row.names = FALSE)

discount <- data.frame(discount_id = c("657f139c-8882-4303-a727-71c127eb11fe"
                                       ,"bb994e4b-50f3-40bd-8002-bfe3a124e063"
                                       ,"257d4468-0961-4af2-ad47-e4424e88fc36"
                                       ,"1ee2a5cd-1cb1-4b2b-a638-62cff42bc50b"
                                       ,"c42d5aa7-7e9f-493d-af53-f0baa1a774cf"),
                       period_start = rep("2021/12/10",5),
                       period_end = rep("2021/12/20",5),
                       method = c("為冒險者們獻上祝福！", "年底大優惠", "聖誕節", "跳樓大拍賣", "資料庫作業好多"),
                       discount_price = c(10, 20, 30, 40,50),
                       discount_percentage= c(0.4, 0.3, 0.2, 0.1,0)
                        )
write.csv(discount, "./csv/discount.csv", row.names = FALSE)

user <- data.frame(user_id = c("b6b60fbf-82be-44fc-9099-b72e9e26c812"
                               ,"d883eb54-17ab-48ae-af97-0852e0d58cc3"
                               ,"3c0422d4-3c32-47be-bcb7-7bad0a325e12"
                               ,"75074e4d-94a2-4053-9b9a-64eea3c4c829"), 
                   name = c("佐藤和真", "阿克婭", "惠惠", "達克妮絲"),
                   password = c("b6b60fbf-82be-44fc-9099-b72e9e26c812"
                               ,"d883eb54-17ab-48ae-af97-0852e0d58cc3"
                               ,"3c0422d4-3c32-47be-bcb7-7bad0a325e12"
                               ,"75074e4d-94a2-4053-9b9a-64eea3c4c829"),
                   email = c("1@email.com", "2@email.com", "3@email.com", "4@email.com"),
                   address = c("異世界", "異世界", "異世界", "異世界")
)
write.csv(user, "./csv/user.csv", row.names = FALSE)

order <- data.frame(order_id = c("d02c231a-ef89-421b-ac63-3565ef8b1795"
                                 ,"2182e406-09be-4e1a-b43d-3263836f9977"
                                 ,"3a8a665c-2b8d-41ae-b740-9665656073bb"
                                 ,"6a1c2f22-8574-4678-ab26-5e6c1dfb8374"),
                    user_id = c("b6b60fbf-82be-44fc-9099-b72e9e26c812"
                                ,"d883eb54-17ab-48ae-af97-0852e0d58cc3"
                                ,"3c0422d4-3c32-47be-bcb7-7bad0a325e12"
                                ,"75074e4d-94a2-4053-9b9a-64eea3c4c829"),
                    create_at = rep("2021/12/11",4),
                    process_status = c("PROCESS", "UNPAID", "COMPLETE", "PROCESS"),
                    remark = c("快一點", "可以分期付款嗎", "倒讚", "快一點"))
write.csv(order, "./csv/order.csv", row.names = FALSE)

order_product <- data.frame(order_id = c("d02c231a-ef89-421b-ac63-3565ef8b1795"
                                         ,"d02c231a-ef89-421b-ac63-3565ef8b1795"
                                         ,"2182e406-09be-4e1a-b43d-3263836f9977"
                                         ,"3a8a665c-2b8d-41ae-b740-9665656073bb"
                                         ,"6a1c2f22-8574-4678-ab26-5e6c1dfb8374"),
                            product_id = c("4a3ba418-1fab-4047-a195-dd31daa35967"
                                           ,"86fcb02c-292c-42a1-a216-560b34f779eb"
                                           ,"86fcb02c-292c-42a1-a216-560b34f779eb"
                                           ,"3a59eecf-b367-466f-b973-2a063db900a0"
                                           ,"c1745aee-58c8-490f-95f8-a3627620ebf4"))
write.csv(order_product, "./csv/order_product.csv", row.names = FALSE)

order_report <- data.frame(order_id = c("d02c231a-ef89-421b-ac63-3565ef8b1795"
                                        ,"2182e406-09be-4e1a-b43d-3263836f9977"
                                        ,"3a8a665c-2b8d-41ae-b740-9665656073bb"
                                        ,"6a1c2f22-8574-4678-ab26-5e6c1dfb8374"),
                       report_id = c("7e6a54da-8613-4d20-a3d7-8439c4afbbd2"
                                     ,"7e6a54da-8613-4d20-a3d7-8439c4afbbd2"
                                     ,"a0d2f0d0-f3db-4d2b-8de5-ee0501365af5"
                                     ,"ef9d4a15-9aba-4dd8-8389-df143bb4c45b"))
write.csv(order, "./csv/order_report.csv", row.names = FALSE)

report <- data.frame(report_id = c("7e6a54da-8613-4d20-a3d7-8439c4afbbd2"
                                   ,"a0d2f0d0-f3db-4d2b-8de5-ee0501365af5"
                                   ,"ef9d4a15-9aba-4dd8-8389-df143bb4c45b"),
                     created_at = rep("2021/12/15",3),
                     text_content = rep("你此次購買共花 1450 錢，貨物 3 小時抵達",3)
                      )
write.csv(report, "./csv/report.csv", row.names = FALSE)

picture <- data.frame(picture_id = c("1c547261-e402-4992-b9b5-aedf3ba9eff9"
                                   ,"aded7b4a-3cf5-4889-bf01-6f09a78f0e9d"
                                   ,"037f0bd1-40e6-4139-abc8-d05d7b6e4d80"
                                   ,"39f2dcde-a1a3-4f40-94c3-86cca92b9999"),
                     picutre_url = c("https://img.ltn.com.tw/Upload/news/600/2022/01/08/phpP2TDnR.jpg",
                                    "https://img.ltn.com.tw/Upload/news/600/2022/01/08/phpP2TDnR.jpg",
                                    "https://img.ltn.com.tw/Upload/news/600/2022/01/08/phpP2TDnR.jpg",
                                    "https://img.ltn.com.tw/Upload/news/600/2022/01/08/phpP2TDnR.jpg"))
write.csv(picture, "./csv/picture.csv", row.names = FALSE)
