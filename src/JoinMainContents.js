import React from "react";

export default function JoinMainContents() {
    const textGroup = (header, content) => {
        return (
            <div className="mb-10 p-2 bg-[#fff]">
                <div className="font-[Noto-Sans-Bold] lg:text-[24px] text-[12px] mb-5">{header}</div>
                <div className="font-[Noto-Snas-Regular] lg:text-[12px] text-[6px]">{content}</div>
            </div>
        );
    }
    const textList = (header, content) => {
        return (
            <div className="p-2">
                <div className="font-[Noto-Sans-Bold] lg:text-[12px] text-[6px]">{header}</div>
                <div className="font-[Noto-Snas-Regular] lg:text-[12px] text-[6px]">{content}</div>
            </div>
        );
    }

    const header = [
        `一緒にコンテンツ制作を行う仲間を募集しています。`,
        `「興味」や「好き」を生かした制作`,
    ];

    const sentence = [
        `ContentsCreationCircleはコンテンツや作品をつくることを目的をとして、それぞれが持ち寄ったアイデアや技術、知識などを活用し 新しいものを生み出していきます。人を楽しませるためや、人に使ってもらうため、人に教えるためなど自分のやりたいことに沿って、コンテンツの制作を行います。制作したコンテンツは、大学祭（工科展）や外部イベントにて出展を行うことで、より開発の楽しさを実感できます。`,
        `ContentsCreationCircleでは、デザインやプログラミングなどのコンテンツ制作に興味を持つメンバーが集まり、チーム開発を通じて自身の「興味」や「好き」を生かした制作を行います。ゲーム開発やチーム開発を初めて経験するメンバーも多くいます。能力の有無に限らず自分の興味や好みを活かしながら、他のメンバーと協力してプロジェクトに取り組んでいます。`,
    ];

    const listHeader = [
        `チーム数・部員`,
        `開発物`,
        `開発形態`,
        `会費`,
        `参加について`,
    ];

    const listContent = [
        `現在 3 チーム、19 名で活動※2024/3現在
        （情報科学部情報科学科 コンピュータシステム専攻 8 名、メディア専攻 12 名、工学部応用科学科 応用科学専攻 1 名）`,
        `現在は全てのチームがゲームを開発
        制作したコンテンツは、大学祭（工科展）や外部イベントにて出展を行います。`,
        `チーム開発
        （企画書の作成・プレゼンテーション→開発メンバーの募集→ 集まった人メンバーで開発）`,
        `入会費：500円
        半期：2000円`,
        `Email・X（旧Twitter）のDMから参加希望の旨を伝えてください。（詳しくはCONTACTページ）
        ※弊サークルへの参加は愛知工業大学に在籍する学生のみ受け付けております。ご了承ください。`,
    ];

    return (
        <>
            <div className="p-10 bg-[#eee]">
                {header.map((header, index) => (
                    <div key={index}>
                        {textGroup(header, sentence[index])}
                    </div>
                ))}
                <div className="bg-[#fff]">
                {listHeader.map((header, index) => (
                    <div key={index}>
                        {textList(header, listContent[index])}
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}
