export const profilesState = {
    profiles: [
        { id: 1, name: '김다미', university: '명지대 경제학과 3학년', job: '마케터',views:20, recommends: 3, scraps: 2, link: '#', timestamp: '2024-01-15T12:00:00',
            qna: [
                { questioner: "이길흥", question: "광고 캠페인을 기획한 적이 있나요?", answer: "SNS 마케팅 캠페인을 기획하고 운영했습니다." }
            ],
            d1:`SNS 마케팅 서포터즈 3기 (2023.03.01 ~ 2023.06.30)`,
            d2:`대학생 광고 캠페인 공모전 동상 (2023.07.15)`,
            d3:`일본 교환학생 프로그램 (2022.08.01 ~ 2022.12.15)`,
            d4:`온라인 커머스 기반 창업 프로젝트 참가 (2023.01.20 ~ 2023.06.20)`
        },
        { id: 2, name: '홍지동', university: '서울대 컴퓨터공학과 2학년', job: '개발자',views:15, recommends: 10, scraps: 5, link: '#', timestamp: '2024-01-14T14:30:00',
            qna: [
                { questioner: "박조아", question: "큐시즘 활동 어떠셨나요?", answer: "알차고 즐거웠습니다. 강력추천" },
                { questioner: "안정후", question: "협업 경험은 어떤가요?", answer: "팀 프로젝트에서 백엔드 개발을 맡았습니다." }
            ],
            d1:`한국대학생 IT경영학회 26기 (2022.08.01 ~ 2022.11.26)`,
            d2:`SW 해커톤 최우수상 (2023.05.05 ~ 2023.05.07)`,
            d3:`미국 실리콘밸리 인턴십 (2023.07.01 ~ 2023.08.15)`,
            d4:`웹 개발 기반 창업 아이디어 경진대회 수상 (2023.10.01 ~ 2023.12.15)
`
        },
        { id: 3, name: '김은지', university: '고려대 기계공학과 4학년', job: '엔지니어',views:14, recommends: 7, scraps: 3, link: '#', timestamp: '2023-03-16T08:45:00' ,
            d1:`기계공학 학술동아리 '엔지니어스' (2022.03.01 ~ 2022.12.30)`,
            d2:`제4회 로봇 디자인 공모전 우수상 (2023.04.01)`,
            d3:`독일 기계공학 컨퍼런스 참여 (2023.09.15 ~ 2023.09.20)`,
            d4:`공학용 3D 프린팅 플랫폼 창업 프로젝트 (2023.02.01 ~ 2023.06.30)`
        },
        { id: 4, name: '박조아', university: '서과기대 정밀화학과 4학년', job: '개발자', views:12,recommends: 6, scraps: 4, link: '#', timestamp: '2023-04-13T09:00:00',
            d1:`환경보호 서포터즈 10기 (2023.03.01 ~ 2023.06.30)`,
            d2:`화학소재 활용 아이디어 공모전 장려상 (2023.08.15)`,
            d3:`중국 교환학생 프로그램 (2022.08.01 ~ 2022.12.15)`,
            d4:`친환경 화학제품 창업 아이디어 제안 (2023.09.01 ~ 2023.12.01)`
         },
        { id: 5, name: '안정후', university: '서과기대 전자미디어과 3학년', job: '개발자', views:11, recommends: 8, scraps: 6, link: '#', timestamp: '2023-05-15T10:00:00' ,
            d1:`공학도연합회 전기정보팀 활동 (2023.01.01 ~ 2023.06.30)`,
            d2:`IoT 솔루션 개발 공모전 대상 (2023.09.01 ~ 2023.09.30)`,
            d3:`일본 전기공학 연수 프로그램 (2023.04.15 ~ 2023.04.30)`,
            d4:`스마트홈 기반 기술 스타트업 인턴십 (2023.07.01 ~ 2023.09.15)`
        },
        { id: 6, name: '김진아', university: '한양대 화학공학과 3학년', job: '연구원', views:10,recommends: 12, scraps: 8, link: '#', timestamp: '2023-11-12T16:00:00' ,
            d1:`화학공학 학술 발표 대회 운영진 (2022.10.01 ~ 2023.01.31)`,
            d2:`대학생 화학공학 논문 공모전 금상 (2023.05.20)`,
            d3:`영국 화학공학 세미나 참석 (2023.07.05 ~ 2023.07.10)`,
            d4:`고분자 연구 기반 스타트업 팀 프로젝트 (2023.02.01 ~ 2023.06.30)`
        },
        { id: 7, name: '노세현', university: '명지대 행정학과 4학년', job: '디자이너',views:9, recommends: 4, scraps: 7, link: '#', timestamp: '2023-11-15T12:00:00' ,
            d1:`디자이너 연합회 '창작공간' 5기 (2022.11.01 ~ 2023.02.28)`,
            d2:`대학생 UI/UX 디자인 공모전 은상 (2023.08.25)`,
            d3:`네덜란드 디자인 박람회 참가 (2023.05.15 ~ 2023.05.20)`,
            d4:`디지털 콘텐츠 제작 관련 창업 프로젝트 (2023.03.01 ~ 2023.08.30)`
        },
        { id: 8, name: '이구연', university: '서울대 컴퓨터공학과 2학년', job: '개발자',views:8, recommends: 11, scraps: 4, link: '#', timestamp: '2023-11-14T14:30:00' ,
            d1:`서울대학교 코딩 클럽 회장 (2023.01.01 ~ 2023.12.31)`,
            d2:`인공지능 알고리즘 공모전 금상 (2023.10.20)`,
            d3:`캐나다 AI 워크숍 참가 (2023.06.10 ~ 2023.06.15)`,
            d4:`인공지능 솔루션 스타트업 창업 프로젝트 (2023.02.01 ~ 2023.08.31)`
        },
        { id: 9, name: '김희동', university: '연세대 경영학과 3학년', job: '마케터',views:7, recommends: 1, scraps: 13, link: '#', timestamp: '2023-12-16T08:45:00' ,
            qna: [
                { questioner: "신유빈", question: "마케팅 공모전에서 어떤 역할을 맡으셨나요?", answer: "팀 리더로 전략 수립과 실행을 총괄했습니다." },
                { questioner: "박은채", question: "미국 마케팅 서밋에서 가장 기억에 남는 점은?", answer: "현지 전문가와 네트워킹하며 트렌드를 배울 수 있던 점입니다." }
            ],            
            d1:`대학생 마케팅 리더스 2기 (2023.03.01 ~ 2023.06.30)`,
            d2:`디지털 마케팅 전략 공모전 최우수상 (2023.08.01)`,
            d3:`미국 마케팅 서밋 참가 (2023.09.20 ~ 2023.09.25)`,
            d4:`데이터 기반 마케팅 분석 창업 아이디어 경진대회 참여 (2023.04.01 ~ 2023.08.31)`
        },
        { id: 10, name: '신유빈', university: '고려대 기계공학과 4학년', job: '엔지니어',views:6, recommends: 15, scraps: 24, link: '#', timestamp: '2023-11-13T09:00:00' ,
            qna: [
                { questioner: "김진아", question: "로봇 공학 공모전에서 어떤 기술을 사용하셨나요?", answer: "IoT와 인공지능 기반의 로봇 자동화 기술을 적용했습니다." },
                { questioner: "안정후", question: "싱가포르 컨퍼런스는 어땠나요?", answer: "최신 기술 동향을 배울 수 있어서 큰 도움이 되었습니다." }
            ],            
            d1:`공학연합 동아리 '엔지니어스 브릿지' 7기 (2022.07.01 ~ 2022.12.31)`,
            d2:`로봇 공학 혁신 공모전 우수상 (2023.06.15)`,
            d3:`싱가포르 공학 컨퍼런스 참가 (2023.08.10 ~ 2023.08.15)`,
            d4:`기계 설계 기반 창업 프로젝트 (2023.01.15 ~ 2023.07.30)`
        },
        { id: 11, name: '김현지', university: '이화여대 심리학과 3학년', job: '상담사',views:4, recommends: 8, scraps: 7, link: '#', timestamp: '2023-11-15T10:00:00' ,
            qna: [
                { questioner: "박조아", question: "심리학 청년 리더십 프로그램에서 배운 점은?", answer: "리더십 개발과 의사소통 능력을 키울 수 있었습니다." },
                { questioner: "최유진", question: "심리 상담 서비스 디자인 공모전에서는 어떤 아이디어를 제안하셨나요?", answer: "사용자 맞춤형 심리 상담 앱을 제안했습니다." }
            ],            
            d1:`심리학 청년 리더십 프로그램 5기 (2023.02.01 ~ 2023.05.31)`,
            d2:`심리상담 서비스 디자인 공모전 장려상 (2023.10.05)`,
            d3:`일본 심리학 학술대회 참가 (2023.07.01 ~ 2023.07.05)`,
            d4:`심리 치료 앱 개발 창업 프로젝트 (2023.04.01 ~ 2023.09.01)`
        },
        { id: 12, name: '최유진', university: '한양대 화학공학과 3학년', job: '연구원',views:3, recommends: 2, scraps: 18, link: '#', timestamp: '2023-12-12T16:00:00' ,
            qna: [
                { questioner: "김다미", question: "친환경 화학 아이디어 공모전에서 어려웠던 점은?", answer: "환경규제와 기술 적용 간 균형을 맞추는 점이 어려웠습니다." },
                { questioner: "이훈수", question: "독일 화학 엔지니어링 워크숍에서 기억에 남는 순간은?", answer: "친환경 소재 개발에 대한 강연이 가장 인상 깊었습니다." }
            ],            
            d1:`화학공학연합 학술 세미나 기획팀 (2022.11.01 ~ 2023.01.31)`,
            d2:`친환경 화학 아이디어 공모전 은상 (2023.05.20)`,
            d3:`독일 화학 엔지니어링 워크숍 참가 (2023.09.10 ~ 2023.09.15)`,
            d4:`지속 가능한 화학 연구 창업 프로젝트 (2023.03.01 ~ 2023.07.31)`
        },
        { id: 13, name: '박은채', university: '이화여대 심리학과 4학년', job: '상담사',views:2, recommends: 18, scraps: 17, link: '#', timestamp: '2023-11-15T10:00:00' ,
            qna: [
                { questioner: "최준우", question: "심리상담 혁신 공모전에서 어떤 아이디어를 냈나요?", answer: "실시간 감정 분석을 활용한 상담 플랫폼을 제안했습니다." },
                { questioner: "이훈수", question: "영국 학술 교류 프로그램에서는 어떤 활동을 하셨나요?", answer: "현지 학생들과 협력하여 상담 사례 연구를 진행했습니다." }
            ],            
            d1:`심리학 연합 '공감소통' 3기 (2022.08.01 ~ 2022.12.31)`,
            d2:`대학생 심리상담 혁신 공모전 최우수상 (2023.06.01)`,
            d3:`영국 심리학 학술 교류 프로그램 참가 (2023.04.15 ~ 2023.04.20)`,
            d4:`심리상담 기반 창업 프로젝트 참여 (2023.01.15 ~ 2023.06.15)`
        },
        { id: 14, name: '이훈수', university: '한양대 화학공학과 2학년', job: '연구원',views:7, recommends: 12, scraps: 8, link: '#', timestamp: '2023-11-12T16:00:00' ,
            qna: [
                { questioner: "최유진", question: "화학 신소재 공모전에서 어떤 공정 기술을 활용하셨나요?", answer: "저온 합성 공정을 사용하여 환경 영향을 줄였습니다." },
                { questioner: "안정후", question: "프랑스 박람회에서 주목한 기술은 무엇인가요?", answer: "바이오 플라스틱 소재와 관련된 최신 기술이 인상적이었습니다." }
            ],            
            d1:`화학공학연구회 'GreenChem' 6기 (2022.09.01 ~ 2023.01.15)`,
            d2:`화학 신소재 공모전 대상 (2023.07.01)`,
            d3:`프랑스 화학 신소재 박람회 참가 (2023.05.01 ~ 2023.05.06)`,
            d4:`고효율 화학 공정 연구 창업 프로젝트 (2023.02.01 ~ 2023.08.31)`
        },
        { id: 15, name: '안은영', university: '한양대 화학공학과 1학년', job: '연구원',views:5, recommends: 2, scraps: 18, link: '#', timestamp: '2023-01-12T16:00:00' ,
            qna: [
                { questioner: "김희동", question: "친환경 에너지 공모전에서 발표한 내용은?", answer: "재생 가능 에너지를 활용한 스마트 홈 설계를 제안했습니다." },
                { questioner: "최유진", question: "일본 공학 창업 워크숍에서 얻은 교훈은?", answer: "현지 창업가들의 실행력과 효율적인 프로세스 운영이었습니다." }
            ],            
            d1:`공학 창업캠프 'TechChallenge' 참가 (2023.03.01 ~ 2023.03.10)`,
            d2:`친환경 에너지 시스템 공모전 은상 (2023.09.01)`,
            d3:`일본 공학 창업 워크숍 참가 (2023.07.15 ~ 2023.07.20)`,
            d4:`전기공학 기반 창업 아이디어 제안 (2023.04.01 ~ 2023.09.01)`
        },
        { id: 16, name: '최진규', university: '이화여대 심리학과 3학년', job: '상담사', views:8,recommends: 18, scraps: 17, link: '#', timestamp: '2023-03-15T10:00:00' ,
            qna: [
                { questioner: "박은채", question: "심리상담 봉사활동에서 어떤 역할을 하셨나요?", answer: "학생들과의 심리 상담 워크숍을 기획하고 운영했습니다." },
                { questioner: "안정후", question: "미국 학술대회 참가를 통해 배운 점은?", answer: "글로벌 관점에서 심리학 연구의 중요성을 배웠습니다." }
            ],
            d1:`심리상담 봉사활동 '마음터치' 4기 (2022.06.01 ~ 2022.12.31)`,
            d2:`심리학 콘텐츠 디자인 공모전 동상 (2023.10.01)`,
            d3:`미국 심리학 청년 학술대회 참가 (2023.08.05 ~ 2023.08.10)`,
            d4:`정신건강 플랫폼 창업 프로젝트 (2023.01.01 ~ 2023.07.31)`
        },
        { id: 17, name: '이세진', university: '한양대 화학공학과 4학년', job: '연구원', views:10, recommends: 12, scraps: 8, link: '#', timestamp: '2023-07-12T16:00:00' ,
            qna: [
                { questioner: "안은영", question: "신소재 아이디어 공모전에서 도출한 결과는?", answer: "친환경적으로 생산 가능한 고효율 소재를 제안했습니다." },
                { questioner: "이훈수", question: "독일 신소재 학회에서 주목한 기술은 무엇인가요?", answer: "고강도 경량 합성소재와 그 응용 분야였습니다." }
            ],            
            d1:`공학연구회 'FutureEngineers' 8기 (2022.11.01 ~ 2023.03.01)`,
            d2:`신소재 활용 아이디어 공모전 우수상 (2023.05.10)`,
            d3:`독일 신소재 학회 참석 (2023.06.01 ~ 2023.06.05)`,
            d4:`차세대 신소재 기술 창업 아이디어 경진대회 (2023.02.01 ~ 2023.08.31)`
        }
    ]
};
