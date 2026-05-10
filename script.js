/**
 * 整个脚本包裹在 DOMContentLoaded 中，确保 HTML 加载完后再运行
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("脚本加载成功！");

    // ================= 1. 板块一：头像点击展开 =================
    const photoWrapper = document.getElementById('photo-wrapper');
    const detailsWrapper = document.getElementById('details-wrapper');
    const introContent = document.getElementById('intro-content');

    if (photoWrapper && detailsWrapper && introContent) {
        photoWrapper.onclick = function() {
            introContent.classList.add('active');
            detailsWrapper.classList.remove('hidden');
            setTimeout(() => {
                detailsWrapper.classList.add('visible');
            }, 50);
        };
    }

    // ================= 2. 板块二：时间线交互 =================
    const timelineData = {
        "2022-2024": {
            text: "这是我探索的初期。在这个阶段，我加入了各种兴趣社团，开始学习运营社团账号，举办校内活动，组织分配工作等等。开始尝试深度的写作，剪辑有主题的视频。我接触的世界开始变得广阔，能力也得以培养。",
            images: [
                { src: "t2_1.jpg", desc: "作为校学友会新传部部长，面向广大校友进行活动宣传工作。" },
                { src: "t2_2.jpg", desc: "作为院歌队运维部成员，组织草地歌舞会，工作包括线上宣发、线下拉赞助、现场执行与后续推文制作。" },
                { src: "t2_3.jpg", desc: "担任23年佛山草莓音乐节检票组志愿者。" },
                { src: "t2_4.jpg", desc: "对位于广东东莞的一家唱片店/音乐厂牌“声音图书馆”进行采访。" },
                { src: "t2_5.jpg", desc: "虽然是新传学院的同学，但由于本院没有音乐社团，遂毛遂自荐加入了信息学院的社团成为运维的一份子。" },
                { src: "t2_6.jpg", desc: "参与了校外位于永庆坊在地文化活动的现场工作，主要负责游客引导、饮品售卖。" },
                { src: "t2_7.jpg", desc: "参与了华南精酿啤酒节的现场兼职工作，客流量上万＋，主要负责游客引导、券币兑换。" }
            ]
        },
        "2024-2025": {
            text: "这是进步最快的一年。因想要拥有更多的社会实践时间，我申请gap了一年。一年的时间里，我在各种大型展会如啤酒节、CPGZ等兼职，在脱口秀剧场、在地文化空间、精酿酒店做长期兼职，并且从0开始主办了一场音乐剧同好活动，工作中获得许多好评。同时，写作、视频拍摄与剪辑工作仍在继续。我的创造能力、解决突发问题的经验、表达能力都得到了极大的提升。",
            images: [
                { src: "t1_1.jpg", desc: "我在位于海珠区江南西的一家精酿酒馆打工，主要负责打酒上酒做小吃洗杯子以及推荐合适的啤酒给客人。" },
                { src: "t1_2.jpg", desc: "举办了一场音乐剧夜场蹦迪活动，获得了上千人关注，现场气氛热闹非凡。我参与的工作有线下找场、沟通场地负责人、线上宣传推广、现场活动执行。" },
                { src: "t1_3.jpg", desc: "在位于鹤岗的一个在地文化空间兼职当店员，同时参与了一个关于墙上绘画的项目采访。" },
                { src: "t1_4.jpg", desc: "在CPGZ兼职，负责同人区秩序维护。" },
                { src: "t1_5.jpg", desc: "因为经常写文章，被店内小伙伴誉为“最佳文学少女”。" },
                { src: "t1_6.jpg", desc: "在位于市二宫的一家脱口秀剧场兼职，负责检票验票、现场秩序维护，时不时帮忙开一下场。" }
            ]
        },
        "2025至今": {
            text: "现在，我正致力于提高自己在新媒体运营、现场活动执行等方面的工作能力，继续尝试同不同的人沟通，用各种各样的方式通过各种各样的媒介去表达传播一些有价值的理念。我的小宇宙正在不断扩张，期待更多可能...",
            images: [
                { src: "t3_1.jpg", desc: "继续在CPGZ当NPC。" },
                { src: "t3_2.jpg", desc: "采访First青年电影展广州在地文化空间站负责人。" },
                { src: "t3_3.jpg", desc: "继续在酒馆兼职。" },
                { src: "t3_4.jpg", desc: "开始有意地运用书籍/音乐分享账号，尝试向外界分享一些有趣的书籍与音乐。" },
                { src: "t3_5.jpg", desc: "受朋友邀请做了一个探店分享推文，有近三千浏览量，收藏点赞量时不时就会上涨。" },
                { src: "t3_6.jpg", desc: "南丹音乐节检票志愿者。现场非常混乱，解决了一个又一个突发问题。" },
                { src: "t3_7.jpg", desc: "拍摄关于广美毕业展的新闻vlog。" },
                { src: "t3_8.jpg", desc: "采访地王广场店家与经理，研究地王广场所爆火的二次元经济。" },
                { src: "t3_9.jpg", desc: "制作的关于“她的声音”的音乐分享图文。" }
            ]
        }
    };

    const timePoints = document.querySelectorAll('.time-point');
    const modal = document.getElementById('modal');
    const modalDate = document.getElementById('modal-date');
    const modalText = document.getElementById('modal-text');
    const timelineGalleryTrack = document.getElementById('timeline-gallery-track');
    const closeBtn = document.querySelector('.close-btn');

    timePoints.forEach(point => {
        point.addEventListener('click', () => {
            const dateText = point.querySelector('.date').innerText;
            const data = timelineData[dateText];
            if (data && modal) {
                modalDate.innerText = dateText;
                modalText.innerText = data.text;
                // 复制一份实现无缝滚动
                const fullImgs = [...data.images, ...data.images];
                // 生成包含描述文字的图片
                timelineGalleryTrack.innerHTML = fullImgs.map(item => 
                    `<img src="${item.src}" class="timeline-img" data-desc="${item.desc}" alt="作品">`
                ).join('');
                
                // 图片生成后绑定悬停逻辑
                setupImageHover();

                modal.classList.remove('hidden');
            }
        });
    });

    if (closeBtn && modal) {
        closeBtn.onclick = () => modal.classList.add('hidden');
    }

    // ================= 3. 板块三：爱好按钮点击 =================
    const hobbyData = {
        "摄影": {
            desc: "我常常被一瞬间感动，并尽力将瞬间留在镜头里。自然的瞬间、生活的瞬间、人与物的瞬间......我都想要看见！",
            images: ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg", "p7.jpg", "p8.jpg", "p9.jpg", "p10.jpg", "p11.jpg", "p12.jpg", "p13.jpg"]
        },
        "写作": {
            desc: "阅读与写作是我常年的习惯。我遇见不同的人，聆听他们的故事。看见各种现状，去整理归纳总结它们。写作的过程，也是思考的过程。",
            images: ["w1.jpg", "w2.jpg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg", "w7.jpg", "w8.jpg", "w9.jpg", "w10.jpg"]
        },
        "观影": {
            desc: "什么都看一点，日常、悬疑、文艺、剧情、动画片、纪录片......几乎都有喜欢的！无论哪种类型，都能聊得来。",
            images: ["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m5.jpg", "m6.jpg", "m7.jpg", "m8.jpg", "m9.jpg", "m10.jpg", "m11.jpg", "m12.jpg", "m13.jpg", "m14.jpg", "m15.jpg", "m16.jpg", "m17.jpg"]
        },
        "音乐": {
            desc: "小时候梦想当歌手，长大后成了indie音乐迷。正在探索着自己与音乐相关的身份：乐迷、记录者、志愿者、主办方......我将持续保持对新鲜事物的好奇心，学无止境。",
            images: ["mu1.jpg", "mu2.jpg", "mu3.jpg", "mu4.jpg", "mu5.jpg", "mu6.jpg", "mu7.jpg", "mu8.jpg", "mu9.jpg", "mu10.jpg", "mu11.jpg", "mu12.jpg", "mu13.jpg", "mu14.jpg", "mu15.jpg", "mu16.jpg", "mu17.jpg", "mu18.jpg", "mu19.jpg"]
        }
    };

    const hobbyBtns = document.querySelectorAll('.hobby-btn');
    const hobbyModal = document.getElementById('hobby-modal');
    const hobbyTitle = document.getElementById('hobby-title');
    const hobbyDesc = document.getElementById('hobby-desc');
    const galleryTrack = document.getElementById('gallery-track');
    const hobbyClose = document.querySelector('.hobby-close-btn');

    hobbyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.innerText.trim();
            const data = hobbyData[type];
            if (data && hobbyModal) {
                hobbyTitle.innerText = type;
                hobbyDesc.innerText = data.desc;
                
                hobbyModal.classList.remove('skin-photography', 'skin-writing', 'skin-movie', 'skin-music');
                if (type === "摄影") hobbyModal.classList.add('skin-photography');
                else if (type === "写作") hobbyModal.classList.add('skin-writing');
                else if (type === "观影") hobbyModal.classList.add('skin-movie');
                else if (type === "音乐") hobbyModal.classList.add('skin-music');

                const fullImgs = [...data.images, ...data.images];
                galleryTrack.innerHTML = fullImgs.map(src => `<img src="${src}" alt="">`).join('');
                
                if (type === "观影") {
                    galleryTrack.style.animationDuration = '10s';
                } else {
                    galleryTrack.style.animationDuration = '20s';
                }
                
                hobbyModal.classList.remove('hidden');
                setTimeout(() => hobbyModal.classList.add('visible'), 50);
            }
        });
    });

    if (hobbyClose) {
        hobbyClose.onclick = () => hobbyModal.classList.add('hidden');
    }

// ================= 4. 板块三：图文作品 (恢复为卡片布局) =================
    const articleContainer = document.getElementById('works-fruit-container'); 
    // 注意：如果你HTML里改回了类名，请确保这里获取的是正确的容器
    
    const myArticles = [
        { title: "去一个房间做客", date: "2023年11月", desc: "15㎡，猫咪、人类、音乐......", img: "w1.jpg", url: "https://mp.weixin.qq.com/s/RWnZ8TYNgFd1xu5cEzBzPQ" },
        { title: "帮助人类成为合格酒鬼", date: "2024年02月", desc: "酒精可以让人变成城市里的鱼。", img: "w2.jpg", url: "https://mp.weixin.qq.com/s/M6pF9SFZ-CeLIjqM6QXwYA" },
        { title: "被看见的独立之声", date: "2024年05月", desc: "做一件不被看好的事，有多难？", img: "w3.jpg", url: "https://mp.weixin.qq.com/s/F1I8W1zxCK82oHsDZUrW5A" },
        { title: "这次Parklife你还来吗？", date: "2024年07月", desc: "英伦摇滚爱好者们相聚在二沙岛艺术公园，共同度过Parklife。", img: "w4.jpg", url: "https://mp.weixin.qq.com/s/hgsd0Xi2-Covv1Rqjbrf7g" },
        { title: "来·回 | 一生二，二三万物", date: "2024年09月", desc: "在舞蹈中感受万物，感受灵魂。", img: "w5.jpg", url: "https://mp.weixin.qq.com/s/dtxQujQ777eUCCkhltrstw" },
        { title: "安溥 | 与你谈心，与你握手", date: "2024年10月", desc: "记一次安溥演唱会的观后感。", img: "w6.jpg", url: "https://mp.weixin.qq.com/s/d88LQiRlWulenqVxUJSyhQ" },
        { title: "异性恋中的骑士谎言", date: "2024年11月", desc: "你对我的好，是真的好吗？", img: "w7.jpg", url: "https://mp.weixin.qq.com/s/-BIe3-0yBzDolre8datT-A" },
        { title: "活化我的思维", date: "2025年01月", desc: "关于如何对抗脑雾的思考。", img: "w10.jpg", url: "https://mp.weixin.qq.com/s/lCPFF_tZrcGLvVTf3cXXdg" },
        { title: "灵魂的重量", date: "2025年02月", desc: "外公去世后，我们开始讨论玄学。", img: "w8.jpg", url: "https://mp.weixin.qq.com/s/s1UyrwryD5EULzbjKDzDCQ" },
        { title: "罗小黑战记二创潮：拿起笔就是产粮", date: "2025年03月", desc: "老师，您吃了吗？", img: "w9.jpg", url: "https://mp.weixin.qq.com/s/F665C5t-LMmQkmE9pq-OEQ" }
    ];

 if (articleContainer) {
        // 渲染回最初的卡片 HTML 结构 (注意这里面的类名已经改回去了！)
        articleContainer.innerHTML = myArticles.map(art => `
            <a href="${art.url}" target="_blank" class="work-card">
                <div class="work-img">
                    <img src="${art.img}" alt="${art.title}">
                </div>
                <div class="work-info">
                    <h3>${art.title}</h3>
                    <p>${art.desc}</p>
                </div>
            </a>
        `).join('');
    }

    window.onclick = (e) => {
        if (e.target === modal) modal.classList.add('hidden');
        if (e.target === hobbyModal) hobbyModal.classList.add('hidden');
    };
});

// ============================================================
// 文艺四季流转系统
// ============================================================
const canvas = document.getElementById('season-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height, seasonIndex = 0, treeSegments = [], drawCount = 0, particles = [], wind = 0;

    const seasons = [
        { name: '春', bg: '#f5faf5', color: '#82b382', weather: 'rain' },
        { name: '夏', bg: '#f5f8fa', color: '#5c9bd1', weather: 'storm' },
        { name: '秋', bg: '#faf7f2', color: '#c9a07c', weather: 'none' },
        { name: '冬', bg: '#f7f7f7', color: '#b0b0b0', weather: 'snow' }
    ];

    function init() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        startNewLife();
    }

    function startNewLife() {
        treeSegments = [];
        drawCount = 0;
        buildTree(width * 0.8, height, 120, -Math.PI / 2, 8, 0);
    }

    function buildTree(x, y, len, angle, thick, depth) {
        if (depth > 8) return;
        const endX = x + Math.cos(angle) * len;
        const endY = y + Math.sin(angle) * len;
        treeSegments.push({ x1: x, y1: y, x2: endX, y2: endY, thick: thick, depth: depth });
        const branches = 2 + Math.floor(Math.random() * 2);
        for (let i = 0; i < branches; i++) {
            const nextAngle = angle + (Math.random() - 0.5) * 0.8;
            const nextLen = len * (0.65 + Math.random() * 0.2);
            buildTree(endX, endY, nextLen, nextAngle, thick * 0.65, depth + 1);
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        canvas.style.backgroundColor = seasons[seasonIndex].bg;
        const config = seasons[seasonIndex];
        ctx.lineCap = 'round';

        for (let i = 0; i < width; i += 45) {
            const shake = Math.sin(Date.now() / 2000 + i) * 5 + (wind * 10);
            ctx.beginPath();
            ctx.strokeStyle = config.color;
            ctx.lineWidth = 1;
            ctx.moveTo(i, height);
            ctx.quadraticCurveTo(i, height - 10, i + shake, height - 18);
            ctx.stroke();
        }

        for (let i = 0; i < drawCount && i < treeSegments.length; i++) {
            const seg = treeSegments[i];
            ctx.beginPath();
            ctx.strokeStyle = config.color;
            ctx.lineWidth = seg.thick;
            const breathe = Math.sin(Date.now() / 2500 + i * 0.1) * (seg.depth * 0.5);
            ctx.moveTo(seg.x1 + (wind * seg.depth), seg.y1);
            ctx.lineTo(seg.x2 + breathe + (wind * (seg.depth + 1)), seg.y2);
            ctx.stroke();
        }
        if (drawCount < treeSegments.length) drawCount += 1;
        updateWeather(config.weather, config, ctx);
        wind *= 0.98;
        requestAnimationFrame(draw);
    }

    function updateWeather(type, config, ctx) {
        if (type === 'none') { particles = []; return; }
        if (particles.length < 60) {
            particles.push({ x: Math.random() * width, y: -20, v: 2 + Math.random() * 3, s: type === 'snow' ? Math.random() * 3 + 1 : 1 });
        }
        particles.forEach((p, i) => {
            ctx.fillStyle = type === 'snow' ? '#fff' : 'rgba(174,194,224,0.4)';
            if (type === 'snow') {
                ctx.beginPath(); ctx.arc(p.x + (wind * 20), p.y, p.s, 0, Math.PI * 2); ctx.fill();
            } else {
                ctx.fillRect(p.x + (wind * 30), p.y, 1, 10);
            }
            p.y += p.v;
            if (p.y > height) particles.splice(i, 1);
        });
    }

    document.addEventListener('click', () => { wind = -1.5; });
    window.addEventListener('resize', init);
    init();
    draw();

    setInterval(() => {
        seasonIndex = (seasonIndex + 1) % 4;
        startNewLife();
    }, 20000);
}

// 独立的图片悬停跟随逻辑
function setupImageHover() {
    const imgs = document.querySelectorAll('.timeline-img');
    const track = document.getElementById('timeline-gallery-track');
    const tooltip = document.getElementById('image-info-tooltip'); 

    if (!tooltip || !track) return;

    imgs.forEach(img => {
        img.onmouseenter = (e) => {
            track.style.animationPlayState = 'paused';
            img.style.transform = 'scale(1.2)';
            img.style.zIndex = '100';
            tooltip.innerText = img.getAttribute('data-desc'); 
            tooltip.style.opacity = '1';
        };
        img.onmousemove = (e) => {
            tooltip.style.left = (e.clientX + 15) + 'px'; 
            tooltip.style.top = (e.clientY + 15) + 'px';
        };
        img.onmouseleave = () => {
            track.style.animationPlayState = 'running';
            img.style.transform = 'scale(1)';
            img.style.zIndex = '1';
            tooltip.style.opacity = '0';
        };
    });
}

// ============================================================
