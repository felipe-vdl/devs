import { createSlice } from '@reduxjs/toolkit';

/* Imagens Projetos */
import balcaoDeEmpregosImg from '../imgs/projetos/balcao-de-empregos.jpg';
import cadartImg from '../imgs/projetos/cadart.jpg';
import cadforImg from '../imgs/projetos/cadastro-fornecedores.jpg';
import cadastroHabitacionalImg from "../imgs/projetos/cadastro-habitacao.jpg";
import cidade360Img from '../imgs/projetos/cidade-360.jpg';
import culturaImg from '../imgs/projetos/cultura.jpg';
import impressoesImg from '../imgs/projetos/impressoes.jpg';
import melhorEmCasaImg from '../imgs/projetos/melhor-em-casa.jpg';
import observatorioImg from '../imgs/projetos/observatorio.jpg';
import periciaMedicaImg from '../imgs/projetos/pericia-medica.jpg';
import rccoImg from "../imgs/projetos/rcco.jpg";
import salaDoEmpreendedorImg from '../imgs/projetos/sala-do-empreendedor.jpg';
import sgfImg from '../imgs/projetos/sgf.jpg';
import siestecImg from '../imgs/projetos/siestec.jpg';
import sirvodecImg from '../imgs/projetos/sirvodec.jpg';
import sissegImg from "../imgs/projetos/sisseg.jpg";
import tropaImg from '../imgs/projetos/tropa.jpg';
import zoneamento360Img from '../imgs/projetos/zoneamento.jpg';

const initialState = {
    lista: [
        { id: 'balcao-de-empregos', nome: 'Balcão de Empregos', img: balcaoDeEmpregosImg, href: 'https://tecnologia360.mesquita.rj.gov.br/trabalho', sobre: '' },
        { id: 'cadart', nome: 'CADART', img: cadartImg , href: 'https://tecnologia360.mesquita.rj.gov.br/cadart', sobre: '' },
        { id: 'cadastro-fornecedores', nome: 'CADFOR', img: cadforImg, href: 'https://tecnologia360.mesquita.rj.gov.br/cadfor/', sobre: '' },
        { id: 'cadastro-habitacao', nome: 'Cadastro Habitacional', img: cadastroHabitacionalImg, href: 'https://tecnologia360.mesquita.rj.gov.br/habitacao', sobre: '' },
        { id: 'cidade-360', nome: 'Cidade 360', img: cidade360Img, href: 'https://cidade.mesquita.rj.gov.br/', sobre: '' },
        { id: 'cultura', nome: 'Cultura', img: culturaImg, href: 'https://tecnologia360.mesquita.rj.gov.br/cultura', sobre: '' },
        { id: 'impressoes', nome: 'SISPRINT', img: impressoesImg, href: 'https://tecnologia360.mesquita.rj.gov.br/sisprint', sobre: '' },
        { id: 'melhor-em-casa', nome: 'Melhor em Casa', img: melhorEmCasaImg, href: 'https://tecnologia360.mesquita.rj.gov.br/melhoremcasa', sobre: '' },
        { id: 'observatorio', nome: 'Observatório', img: observatorioImg, href: 'https://observatorio.mesquita.rj.gov.br/', sobre: '' },
        { id: 'pericia-medica', nome: 'Perícia Médica', img: periciaMedicaImg, href: 'https://periciamedica.mesquita.rj.gov.br/', sobre: '' },
        { id: 'rcco', nome: 'RCCO', img: rccoImg, href: 'http://rcco.mesquita.rj.gov.br/', sobre: '' },
        { id: 'sala-do-empreendedor', nome: 'Sala do Empreendedor', img: salaDoEmpreendedorImg, href: 'http://saladoempreendedor.mesquita.rj.gov.br/', sobre: '' },
        { id: 'sgf', nome: 'SGF', img: sgfImg, href: 'https://tecnologia360.mesquita.rj.gov.br/sgf', sobre: '' },
        { id: 'siestec', nome: 'SIESTEC', img: siestecImg, href: 'https://tecnologia360.mesquita.rj.gov.br/siestec', sobre: '' },
        { id: 'sirvodec', nome: 'SIRVODEC', img: sirvodecImg, href: 'https://sirvodec.mesquita.rj.gov.br/', sobre: '' },
        { id: 'sisseg', nome: 'SISSEG', img: sissegImg, href: 'https://tecnologia360.mesquita.rj.gov.br/sisseg', sobre: '' },
        { id: 'tropa', nome: 'Tropa', img: tropaImg, href: 'https://tecnologia360.mesquita.rj.gov.br/tropa', sobre: '' },
        { id: 'zoneamento', nome: 'Zoneamento 360', img: zoneamento360Img, href: 'https://tecnologia360.mesquita.rj.gov.br/zoneamento/', sobre: '' },
    ],
    theme: {
        shadowColor: 'shadow-indigo-800',
        borderColor: 'border-indigo-500',
        bgColor: 'bg-indigo-500',
        textColor: 'text-indigo-100'
    }
}

const projetosSlice = createSlice({
    name: 'projetos',
    initialState,
    reducers: {},
});

export default projetosSlice.reducer;