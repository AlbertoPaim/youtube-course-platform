'use client';

import { PlayerHeader } from "@/components/player/PlayerHeader";
import { PlayerClassDetails } from "@/components/player/playlist/playerClassDetails/PlayerClassDetails";
import { Playlist } from "@/components/player/playlist/Playlist";
import { useParams } from "next/navigation";

export default function Player() {

    const params = useParams();
    const courseId = params.courseId as string;
    const classId = params.classId as string;

    const classGroupData = [
        {
            title: 'introdução1',
            classes: [{
                done: true,
                classId: '1',
                title: 'O que é next 01',
            }, {
                done: true,
                classId: '2',
                title: 'O que é next 02',
            },
            {
                done: true,
                classId: '3',
                title: 'O que é next 03',
            }]
        }
    ];

    return (
        <main className=" flex  flex-col gap-2 h-screen">
            <PlayerHeader title="Titulo"
                subtitle="Subtitulo"
            />
            <div className="flex gap-2  h-[calc(100vh-80px)]">
                <div className="max-w-96 hidden md:block">
                    <Playlist
                        playingClassId={classId}
                        playingCourseId={courseId}

                        groupClasses={classGroupData}
                    />

                </div>

                <PlayerClassDetails

                    course={{
                        title: 'Curso de Next.js',
                        description: 'Aprenda Next.js do zero',
                        numberOfClasses: 3,
                        id: '',
                        classGroups: classGroupData
                    }}

                    classItem={{
                        id: '',
                        videoId: "",
                        viewsCount: 15,
                        likesCount: 14,
                        commentsCount: 40,
                        title: 'O que é Next.js',
                        description: 'Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA\n\nBons desenvolvedores utilizam todas as ferramentas ao alcance para simplificar o seu trabalho e ainda assim manter a qualidade ou melhora-la ainda mais.\nNessa aula vamos olhar o protótipo desenvolvido no curso de Figma para DEVs aqui do canal, o protótipo desenvolvido será o nosso guia principal durante o desenvolvimento do projeto desse curso.\n\nDesenvolva o protótipo mostrado você mesmo e se destaque com seus clientes ou na sua empresa, assista o curso de 🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10\n\n\nLinks mencionados no vídeo:\n🅵 Protótipo - https://www.figma.com/community/file/1349332873161679016/plataforma-de-cursos\n🗨️ Discord - https://discord.gg/ZC7JrPZn7P\n\nOutros cursos no canal:\n🔔 NextJS, TailwindCSS e Typescript - https://youtu.be/bP47qRVRqQs\n🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10\n☪️ Curso de estilização no React - https://youtu.be/oUbPkR799fc\n⭐️ Curso de React com typescript - https://youtu.be/1bEbBkWc4-I\n👑 React, Material UI 5 e Typescript - https://youtu.be/wLH1Vv86I44\n🏆 Curso de API Rest, Node e Typescript - https://youtu.be/SVepTuBK4V0\n\nLivros recomendados:\n📘 Código limpo - https://amzn.to/43Xiick\n📘 Arquitetura limpa - https://amzn.to/3ZMCStr\n📘 Migrando sistemas monolíticos - https://amzn.to/45ByPDZ\n📘 The Micro SaaS Handbook - https://amzn.to/4jCan93\n\nConteúdo:\n0:00 | Introdução\n0:30 | O que estamos vendo nas primeiras aulas\n2:00 | SSR dentro das redes sociais\n5:40 | Apresentação do protótipo do projeto\n10:00 | Isolamento dos componentes no Figma\n11:40 | Finalização e agradecimentos\n\nCODARSE - Introdução e apresentação do projeto\n\n#DesenvolvimentoWeb #Programação #DesenvolvimentoDeSoftware #AprenderProgramação #CursosOnline #TechTutoriais #YouTubeEducação #CodeNewbies #DesenvolvimentoFrontend #CodeWithMe #TecnologiaEducacional #WebDesign #DesenvolvimentoDeAplicativos #AprendaACodificar #TecnologiaDeFrontend #EducaçãoDigital #DesenvolvimentoDeApps #TutoriaisDeProgramação #CódigoCriativo #ProgramaçãoParaIniciantes #NextJS #typescript #javascript #tailwindcss #react #reactjs',
                    }}

                />

            </div>
        </main>

    );
};