// components
import FadeInBottom from "../FadeInBottom";

export default function About() {
    return (
        <>
            <div className="mx-[15%]">
                <div className="text-center mb-3">
                    <div className="font-[Noto-Sans-Bold] md:text-[24px] text-[12px]">チーム開発をきっかけに</div>
                </div>
                <FadeInBottom>
                <p className="font-[Noto-Sans-Regular] md:text-[12px] text-[6px]">
                    ContentsCreationCircleでは、同じ目標を持った仲間とともにチーム開発でプロジェクトを進めていきます。個人開発では味わうことができないチーム開発ならではの良さや苦労が体験できます。<br /><br />
                    チーム開発は効果的なコミュニケーション、協力、問題解決能力を発展させ、学びや経験を得ることができる機会にもなります。
                </p>
                </FadeInBottom>
            </div>
        </>
    );

}