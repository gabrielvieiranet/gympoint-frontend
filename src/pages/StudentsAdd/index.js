import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdSearch } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import PageContainer from '~/components/PageContainer';
import PageHeader from '~/components/PageHeader';
import PageContent from '~/components/PageContent';
import ButtonDefault from '~/components/ButtonDefault';

export default function StudentsAdd(props) {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStudent() {
      const { id } = props.match.params;
      if (id) {
        console.tron.log(`carregar aluno ${id}`);
        try {
          setLoading(true);
          const response = await api.get(`students/${id}`);
          setStudent(response.data);
          setLoading(false);
        } catch (err) {
          toast.error('Falha ao carregar aluno');
          setLoading(false);
        }
      }
    }
    loadStudent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <PageHeader>
        <h1>Cadastro de aluno</h1>
        <div>
          <ButtonDefault
            type="button"
            alternative
            onClick={() => {
              history.push('/students');
            }}
          >
            Voltar
          </ButtonDefault>
          <ButtonDefault type="button">Salvar</ButtonDefault>
        </div>
      </PageHeader>
      <PageContent loading={loading}>
        <h1>Aluno: {student.name}</h1>
        <h1>E-mail: {student.email}</h1>
        <h1>Idade: {student.age}</h1>

        {/* TODO: criar formulario de cadastro aqui */}
      </PageContent>
    </PageContainer>
  );
}
