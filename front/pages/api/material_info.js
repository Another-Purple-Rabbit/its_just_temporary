

export default function handler(req, res) {
    res.status(200).json([
        {
            name: 'ABS',
            description: 'Акрилонитрилбутадиенстирол',
            advantages: 'ABS известен своей прочностью и устойчивостью к ударам, что делает его идеальным для функциональных прототипов и деталей, которые подвергаются механическим нагрузкам.',
            projects: 'Прочные и долговечные детали, такие как инженерные прототипы, детали для механизмов, корпуса электроники или детали для использования наружу.'
        },
        {
            name: 'PLA',
            description: 'Полилактид',
            advantages: 'PLA биоразлагаемый, безопасен для использования и имеет низкую токсичность, что делает его привлекательным для печати предметов, которые будут использоваться вблизи людей, включая игрушки и модели.',
            projects: 'Красивые и детализированные модели, украшения, игрушки или предметы, которые не подвергаются сильным механическим нагрузкам.'
        },
        {
            name: 'PETG',
            description: 'Полиэтилентерефталатгликоль',
            advantages: 'PETG обладает хорошей прочностью и устойчивостью к ударам, при этом сохраняя прозрачность и легкость в печати. Он также водостойкий и обладает хорошей химической стойкостью.',
            projects: 'Прочный и прозрачный материал, подходящий для создания бутылок, контейнеров, защитных щитков или деталей, которые должны быть устойчивыми к воздействию воды и химических веществ.'
        },
        {
            name: 'TPU',
            description: 'Термопластичный полиуретан',
            advantages: 'TPU гибкий и эластичный материал, который обладает высокой стойкостью к истиранию. Он отлично сгибается и восстанавливает свою форму, что делает его идеальным для печати гибких деталей и упругих конструкций.',
            projects: 'Гибкие детали, такие как уплотнители, ремешки, подошвы для обуви или другие предметы, которые требуют устойчивости к деформации и истиранию.'
        },
    ]);
}