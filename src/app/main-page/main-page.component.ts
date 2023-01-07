import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SearchDialog } from "../search-dialog/search-dialog.component";
import { SearchService } from "../shared/services/search.service";
import { map } from "rxjs";

@Component({
  selector: 'app-main-page',
  template: '<youtube-player"></youtube-player>',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {
  user: any;
  currentPlaying: any = false;
  currentSearching: any=false;
  screenWidth:any;
  url: any = null;
  loggedIn: boolean = true;
  isLoading: boolean = true;
  private accessToken = '';
  private fakedData: any = {
    "kind": "youtube#videoListResponse",
    "etag": "4cIPfaW_w3ob66bLpAYo07JKdFI",
    "items": [
        {
            "kind": "youtube#video",
            "etag": "9EfFHRCDfXrklSLC8FZp9wFsXLU",
            "id": "2YllmPaKhkY",
            "snippet": {
                "publishedAt": "2021-04-04T13:00:16Z",
                "channelId": "UCczPNyl3I3h8N4wK8-56VIg",
                "title": "HẠ CÒN VƯƠNG NẮNG | DATKAA x KIDO x Prod. QT BEATZ [OFFICIAL MUSIC VIDEO]",
                "description": "#HACONVUONGNANG #DATKAA #HCVN\n                                        ==================== \n▶Composer : DATKAA \n▶RAP : KIDO\n▶Music Producer : QT BEATZ\n▶Producer/Sản Xuất : DATKAA \n▶Director & Camera : KIEN TRUNG\n▶Design, Editor : NHON HO, DATKAA \n▶Mix & Master : ZUKEN \n\nChân thành cảm ơn tất cả anh em đã hỗ trợ DatKaa trong MV lần này và tất cả cả bạn đã luôn đồng hành theo dõi ủng hộ DatKaa đây là một phần quà lời cảm ơn chân thành đến với khán giả . Hãy cùng tận hưởng nó nhé !!!\nCảm ơn Z studio đã hỗ trợ cho MV lần này \n\nZing MP3 : https://zingmp3.vn/album/Ha-Con-Vuong-Nang-Single-DatKaa/S7DF7ECF.html\n\n🔔 Bật thông báo để không bỏ lỡ những sản phẩm mới nhất của DatKaa nhé! 🔔\n\n► Đăng ký kênh tại: https://bitly.com.vn/drhxdx\n► Facebook: https://www.facebook.com/datkaa0912\n► Fanpage: https://www.facebook.com/datkaaofficial1209\n► Tiktok: https://www.tiktok.com/@datkaa0912\n► Email liên hệ: contactdatkaa0912@gmail.com\n► Cảm ơn tất cả các bạn đã xem video của Đạt , nhớ Like & Đăng kí kênh ủng hộ Đạt nhé !!!\n► Mình sẽ cố gắng làm ra những video chất lượng và tính giải trí nhất có thể cho các mọi người . Yêu Các Mọi Người !!!\n---------------------/---------------------\n© Bản quyền thuộc về DatKaa - Vui lòng KHÔNG REMIX, COVER, REUP dưới mọi hình thức",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2YllmPaKhkY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2YllmPaKhkY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2YllmPaKhkY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2YllmPaKhkY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2YllmPaKhkY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "DatKaa Official",
                "tags": [
                    "hạ còn vương nắng",
                    "ha con vuong nang",
                    "hạ còn vương nắng cover",
                    "hạ còn vương nắng remix",
                    "hạ còn vương nắng karaoke",
                    "hạ còn vương nắng lyrics",
                    "hạ còn vương nắng 1 hours",
                    "hạ còn vương nắng datkaa",
                    "datkaa hạ còn vương nắng",
                    "hạ còn vương nắng kido",
                    "hạ còn vương nắng qt beatz",
                    "hạ còn vương nắng mv",
                    "hạ còn vương nắng music",
                    "hạ còn vương nắng video",
                    "hạ còn vương nắng music video",
                    "datkaa",
                    "đạt kaa",
                    "dat kaa",
                    "datkaa official",
                    "nguyễn tấn đạt",
                    "hcvn",
                    "datkaa tiktok",
                    "#hcvn",
                    "#datkaa"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "HẠ CÒN VƯƠNG NẮNG | DATKAA x KIDO x Prod. QT BEATZ [OFFICIAL MUSIC VIDEO]",
                    "description": "#HACONVUONGNANG #DATKAA #HCVN\n                                        ==================== \n▶Composer : DATKAA \n▶RAP : KIDO\n▶Music Producer : QT BEATZ\n▶Producer/Sản Xuất : DATKAA \n▶Director & Camera : KIEN TRUNG\n▶Design, Editor : NHON HO, DATKAA \n▶Mix & Master : ZUKEN \n\nChân thành cảm ơn tất cả anh em đã hỗ trợ DatKaa trong MV lần này và tất cả cả bạn đã luôn đồng hành theo dõi ủng hộ DatKaa đây là một phần quà lời cảm ơn chân thành đến với khán giả . Hãy cùng tận hưởng nó nhé !!!\nCảm ơn Z studio đã hỗ trợ cho MV lần này \n\nZing MP3 : https://zingmp3.vn/album/Ha-Con-Vuong-Nang-Single-DatKaa/S7DF7ECF.html\n\n🔔 Bật thông báo để không bỏ lỡ những sản phẩm mới nhất của DatKaa nhé! 🔔\n\n► Đăng ký kênh tại: https://bitly.com.vn/drhxdx\n► Facebook: https://www.facebook.com/datkaa0912\n► Fanpage: https://www.facebook.com/datkaaofficial1209\n► Tiktok: https://www.tiktok.com/@datkaa0912\n► Email liên hệ: contactdatkaa0912@gmail.com\n► Cảm ơn tất cả các bạn đã xem video của Đạt , nhớ Like & Đăng kí kênh ủng hộ Đạt nhé !!!\n► Mình sẽ cố gắng làm ra những video chất lượng và tính giải trí nhất có thể cho các mọi người . Yêu Các Mọi Người !!!\n---------------------/---------------------\n© Bản quyền thuộc về DatKaa - Vui lòng KHÔNG REMIX, COVER, REUP dưới mọi hình thức"
                },
                "defaultAudioLanguage": "vi"
            },
            "contentDetails": {
                "duration": "PT4M52S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "74599236",
                "likeCount": "400546",
                "favoriteCount": "0",
                "commentCount": "14480"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "zA5rVR9vvcd41FE01CTK_B4BnbU",
            "id": "7kJkNDjgOE4",
            "snippet": {
                "publishedAt": "2022-12-03T12:55:10Z",
                "channelId": "UCqCkDxuA74VmDk73txol5iQ",
                "title": "CHÀNG TRAI CỦA EM - DUY VĂN PHẠM | OFFICIAL MUSIC VIDEO",
                "description": "CHÀNG TRAI CỦA EM - DUY VĂN PHẠM | OFFICIAL MUSIC VIDEO\n#changtraicuaem\n#duyvanpham\n#acventertainment\n\nCredit MV Official \n\nProduction Manager : Lê Cương\nDirector of Communications : Bùi Trung Hiếu\nSingers & Composer: Duy Van Pham \nMain Actress: Hách Liên Tử Nguyệt\nRecording: Nguyễn Như Việt \nMix and Mastering: Lê Trường Vũ\nMusic Producer: Minh khoa\nScript Writer & Director: Cảnh Cuội  \nProject Assistant: Mai Phan\nEditor: Lục Quốc Huy  \nColor Grading: Lê Thanh Tùng - Nguyễn Tiến \nCamera Operator: Tung Le - Pong \nPhotographer: Healer Nguyen - Nguyễn Hoàng Phúc \nDesigner: Pong  \nStylist: Dương Ng\nStarring: Trần Hoàng Sơn - Trần Đạt - Lưu Văn Tân - Bùi Thị Quỳnh Hương - Nguyen Ngoc Anh\n\n\nLyric : \nMới hơn hai mươi tuổi\nVà cũng chẳng có gì trong tay\nSáng xuất xôi lạc, trưa về làm thêm gói mì\nNhà anh thì cấp bốn\nXe anh thì đi wave tàu\nNhìn anh không biết em có chịu thương không\nAnh đây thì vẫn ế\nXe anh vẫn thừa yên sau\nNếu thích đi xa em chỉ cần alo anh tới tận nhà\nAnh chẳng phải siêu nhân\nChứ anh thì luôn sẵn sàng\nQuyết tâm, bảo vệ cho em\n\nĐk : \nAnh sẽ là một chàng trai \nLuôn mang vác tương lai cho em\nEm sẽ là một cô gái\nLuôn bình an giữa những bộ bề\nBa mẹ em khó tính\nThì ba mẹ anh cũng chẳng vừa\nHạnh phúc đi lên từ những điều bé thôi\n\nNắm tay qua mọi gian khó\nSánh bước trên con đường dài\nAnh sẽ luôn thật cố gắng\nTa cùng nhau đắp xây tương lai\nĐừng bận tâm chi nữa\nCô đơn vậy đủ rồi\nGiờ đã, có anh đây rồi\n\nNhưng mà lỡ yêu rồi \nThì làm sao lại phải giấu\nChẳng phải đằng ấy cũng đang bơ vơ một mình hay sao\nChẳng cần em đồng ý\nThì anh đây vẫn cứ đâm đầu\nTình yêu thì đâu cần có lí do\n\nLiên hệ công việc:\n• Booking :\n✆ 0968.191.333 (Mr Nghĩa)\n• Facebook: https://www.facebook.com/nghiaacvmusic\n• Email: Bookingacv@gmail.com\n\n► Nếu có bất kỳ vấn đề nào liên quan đến bản quyền trong video, xin vui lòng liên hệ: banquyen@acventertainment.com\n--------\nfollow Duy Văn Phạm: \nFACEBOOK: https://www.facebook.com/vanpham.duy.109\nTIKTOK: https://www.tiktok.com/@_duyvanpham99\n--------------------------------------------------------------/-------------------\n© Bản quyền  Duy Văn Phạm Official Official\n© Copyright by  Duy Văn Phạm Official & ACV Entertainment ☞ Do not Reup",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/7kJkNDjgOE4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/7kJkNDjgOE4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/7kJkNDjgOE4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/7kJkNDjgOE4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/7kJkNDjgOE4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Duy Văn Phạm Official",
                "tags": [
                    "duy văn phạm",
                    "duy văn phạm tiktok",
                    "duyvanpham tiktok",
                    "phạm văn duy tiktok",
                    "duyvanpham official",
                    "duyvanpham99",
                    "duyvanpham",
                    "duy van pham",
                    "duy văn phạm tik tok",
                    "chàng trai của em duy văn phạm",
                    "chàng trai của em mv",
                    "chàng trai của em hot tiktok",
                    "chàng trai của em",
                    "anh sẽ là một chàng trai",
                    "anh sẽ là một chàng trai luôn mang vác tương lai cho em"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "CHÀNG TRAI CỦA EM - DUY VĂN PHẠM | OFFICIAL MUSIC VIDEO",
                    "description": "CHÀNG TRAI CỦA EM - DUY VĂN PHẠM | OFFICIAL MUSIC VIDEO\n#changtraicuaem\n#duyvanpham\n#acventertainment\n\nCredit MV Official \n\nProduction Manager : Lê Cương\nDirector of Communications : Bùi Trung Hiếu\nSingers & Composer: Duy Van Pham \nMain Actress: Hách Liên Tử Nguyệt\nRecording: Nguyễn Như Việt \nMix and Mastering: Lê Trường Vũ\nMusic Producer: Minh khoa\nScript Writer & Director: Cảnh Cuội  \nProject Assistant: Mai Phan\nEditor: Lục Quốc Huy  \nColor Grading: Lê Thanh Tùng - Nguyễn Tiến \nCamera Operator: Tung Le - Pong \nPhotographer: Healer Nguyen - Nguyễn Hoàng Phúc \nDesigner: Pong  \nStylist: Dương Ng\nStarring: Trần Hoàng Sơn - Trần Đạt - Lưu Văn Tân - Bùi Thị Quỳnh Hương - Nguyen Ngoc Anh\n\n\nLyric : \nMới hơn hai mươi tuổi\nVà cũng chẳng có gì trong tay\nSáng xuất xôi lạc, trưa về làm thêm gói mì\nNhà anh thì cấp bốn\nXe anh thì đi wave tàu\nNhìn anh không biết em có chịu thương không\nAnh đây thì vẫn ế\nXe anh vẫn thừa yên sau\nNếu thích đi xa em chỉ cần alo anh tới tận nhà\nAnh chẳng phải siêu nhân\nChứ anh thì luôn sẵn sàng\nQuyết tâm, bảo vệ cho em\n\nĐk : \nAnh sẽ là một chàng trai \nLuôn mang vác tương lai cho em\nEm sẽ là một cô gái\nLuôn bình an giữa những bộ bề\nBa mẹ em khó tính\nThì ba mẹ anh cũng chẳng vừa\nHạnh phúc đi lên từ những điều bé thôi\n\nNắm tay qua mọi gian khó\nSánh bước trên con đường dài\nAnh sẽ luôn thật cố gắng\nTa cùng nhau đắp xây tương lai\nĐừng bận tâm chi nữa\nCô đơn vậy đủ rồi\nGiờ đã, có anh đây rồi\n\nNhưng mà lỡ yêu rồi \nThì làm sao lại phải giấu\nChẳng phải đằng ấy cũng đang bơ vơ một mình hay sao\nChẳng cần em đồng ý\nThì anh đây vẫn cứ đâm đầu\nTình yêu thì đâu cần có lí do\n\nLiên hệ công việc:\n• Booking :\n✆ 0968.191.333 (Mr Nghĩa)\n• Facebook: https://www.facebook.com/nghiaacvmusic\n• Email: Bookingacv@gmail.com\n\n► Nếu có bất kỳ vấn đề nào liên quan đến bản quyền trong video, xin vui lòng liên hệ: banquyen@acventertainment.com\n--------\nfollow Duy Văn Phạm: \nFACEBOOK: https://www.facebook.com/vanpham.duy.109\nTIKTOK: https://www.tiktok.com/@_duyvanpham99\n--------------------------------------------------------------/-------------------\n© Bản quyền  Duy Văn Phạm Official Official\n© Copyright by  Duy Văn Phạm Official & ACV Entertainment ☞ Do not Reup"
                },
                "defaultAudioLanguage": "vi"
            },
            "contentDetails": {
                "duration": "PT3M49S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "722171",
                "likeCount": "15336",
                "favoriteCount": "0",
                "commentCount": "654"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "QSjyAa5z1VlzC2VLA6UA1JGwK3U",
            "id": "jLWoIe-s9bM",
            "snippet": {
                "publishedAt": "2014-03-08T03:30:44Z",
                "channelId": "UCS1uVHwpLHQfxPP6nSi8sOw",
                "title": "Hoạt cảnh Hai Bà Trưng - 8A9 2012-2013",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/jLWoIe-s9bM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/jLWoIe-s9bM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/jLWoIe-s9bM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/jLWoIe-s9bM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/jLWoIe-s9bM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Lisa Vu",
                "tags": [
                    "HBT",
                    "Hai Bà Trưng",
                    "8a9",
                    "9a9"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Hoạt cảnh Hai Bà Trưng - 8A9 2012-2013",
                    "description": ""
                }
            },
            "contentDetails": {
                "duration": "PT16M38S",
                "dimension": "2d",
                "definition": "sd",
                "caption": "false",
                "licensedContent": false,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1291",
                "likeCount": "5",
                "favoriteCount": "0",
                "commentCount": "0"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "z_9bM1L5tviXGQTHwp4tOCK6Ow4",
            "id": "QT7w5DHUjT8",
            "snippet": {
                "publishedAt": "2022-09-10T18:35:09Z",
                "channelId": "UC0jfkb8bHxx3Y0MbSmx7QyQ",
                "title": "My morning routine Patrick Bateman style",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/QT7w5DHUjT8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/QT7w5DHUjT8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/QT7w5DHUjT8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/QT7w5DHUjT8/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "Michael Hoover",
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "My morning routine Patrick Bateman style",
                    "description": ""
                }
            },
            "contentDetails": {
                "duration": "PT30S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": false,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "5829185",
                "likeCount": "311270",
                "favoriteCount": "0",
                "commentCount": "2182"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "R0KgVcxb7R60uNQT61bNGwuqqaE",
            "id": "u91DkNXc8ws",
            "snippet": {
                "publishedAt": "2022-06-10T12:40:53Z",
                "channelId": "UCwqCjp1MtLcMwymqd7qFihA",
                "title": "Những Tình Huống Giao Tiếp N4 Không Thể Bỏ qua | 初級日本語会話 | Japanese Conversation N4",
                "description": "#hienminhjp #japaneseconversation #nihongokaiwa #n4kaiwa\nLearn more here: https://www.mlcjapanese.co.jp/\nHãy nghe thật nhiều những tình huống giao tiếp hàng ngày như video dưới đây, bạn sẽ ngạc nhiên vì khả năng phản xạ giao tiếp cải thiện rõ rệt đó!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/u91DkNXc8ws/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/u91DkNXc8ws/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/u91DkNXc8ws/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/u91DkNXc8ws/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "Hien Minh JP",
                "categoryId": "27",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Những Tình Huống Giao Tiếp N4 Không Thể Bỏ qua | 初級日本語会話 | Japanese Conversation N4",
                    "description": "#hienminhjp #japaneseconversation #nihongokaiwa #n4kaiwa\nLearn more here: https://www.mlcjapanese.co.jp/\nHãy nghe thật nhiều những tình huống giao tiếp hàng ngày như video dưới đây, bạn sẽ ngạc nhiên vì khả năng phản xạ giao tiếp cải thiện rõ rệt đó!"
                }
            },
            "contentDetails": {
                "duration": "PT34M7S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "12594",
                "likeCount": "222",
                "favoriteCount": "0",
                "commentCount": "11"
            }
        }
    ],
    "nextPageToken": "CAUQAA",
    "pageInfo": {
        "totalResults": 152,
        "resultsPerPage": 5
    }
  }
  likedVideos: any;
  popularVideos: any;
  sliderArray: any = [];
  popularMusicArray: any = [];
  searchVideosArray: any = [];
  inputValue: any = '';

  constructor(private router: Router, 
      private authService: SocialAuthService,
      private httpClient: HttpClient,
      public dialog: MatDialog,
      private searchService: SearchService
    ) { }

  async getAccessToken() {
    await this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then( (temp) => {
      this.accessToken = temp
      this.getLikedVideos()
      this.getPopularMusicVideo()
    }
      
    );
  }

  playThis(song: any)
  {
    this.url = song;
    this.currentSearching = false;
    this.currentPlaying = true;
    
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    this.screenWidth = window.innerWidth-10;  
    if(this.screenWidth>600)
    {
      this.screenWidth=600;
    }
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.authService.authState.subscribe((user) => { 
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn)
        {
          this.getAccessToken()
        }

    });
    
  }

  openDialog()
  {
    const dialogRef = this.dialog.open(SearchDialog, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }


  getLikedVideos(): void {
    this.isLoading = true;
    if(!this.accessToken) return;
    this.httpClient
    .get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&maxResults=10'
    ,{headers: {Authorization: `Bearer ${this.accessToken}`,Accept: `application/json`}}
    ).pipe(
        map((response: any) => response.items)
      )
    .subscribe((items: any) => 
    {
      
      this.sliderArray = items.map((item: any) => {
          return {
            title: item.snippet.title,
            id: item.id.videoId,
            channel: item.snippet.channelTitle,
            published: new Date(item.snippet.publishedAt),
            img: item.snippet.thumbnails.high.url
          };
        });


      setTimeout(() => 
      {
        this.isLoading = false;
      }, 5000)
 
    })
  }

  getPopularMusicVideo(): void {
    if(!this.accessToken) return;
    this.httpClient
    .get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=VN&videoCategoryId=10&maxResults=2'
    ,{headers: {Authorization: `Bearer ${this.accessToken}`,Accept: `application/json`}}
    ).pipe(
        map((response: any) => response.items)
      )
    .subscribe((items:any) => 
    {
      this.popularMusicArray = items.map((item: any) => {
          return {
            title: item.snippet.title,
            id: item.id.videoId,
            channel: item.snippet.channelTitle,
            published: new Date(item.snippet.publishedAt),
            img: item.snippet.thumbnails.high.url
          };
        });
 
    })
  }

  searchVideos()
  {
    this.searchService.getVideos(this.inputValue)
      .subscribe((items : any) => {
        this.searchVideosArray = items.map((item: any) => {
          return {
            title: item.snippet.title,
            id: item.id.videoId,
            channel: item.snippet.channelTitle,
            published: new Date(item.snippet.publishedAt),
            img: item.snippet.thumbnails.high.url
          };
        });
      });

    this.currentSearching = true
  }

}
