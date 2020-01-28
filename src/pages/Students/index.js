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
import Confirm from '~/components/Confirm';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadStudents() {
    try {
      setLoading(true);
      const response = await api.get('students');
      setStudents(response.data);
      setLoading(false);
    } catch (err) {
      toast.error('Falha ao carregar alunos');
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleStudentDelete(id) {
    try {
      setLoading(true);
      await api.delete(`students/${id}`);
      toast.success('Aluno apagado com sucesso');
      loadStudents();
    } catch (err) {
      toast.error('Falha ao tentar apagar aluno');
      setLoading(false);
    }
  }

  return (
    <PageContainer>
      <PageHeader>
        <h1>Gerenciando alunos</h1>
        <div>
          <ButtonDefault
            type="button"
            onClick={() => {
              history.push('/studentsAdd');
            }}
          >
            Cadastrar
          </ButtonDefault>
          <label htmlFor="search">
            <MdSearch size={16} color="#999" />
            <input id="search" type="text" placeholder="Buscar aluno" />
          </label>
        </div>
      </PageHeader>
      <PageContent loading={loading}>
        {students.length === 0 ? (
          <p>Nenhum aluno cadastrado</p>
        ) : (
          <Confirm title="Apagar Aluno" description="Tem certeza?">
            {confirm => (
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Idade</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.age}</td>
                      <td>
                        <Link to={`/students/${student.id}`}>editar</Link>
                        <button
                          type="button"
                          onClick={() =>
                            confirm(handleStudentDelete, student.id)
                          }
                        >
                          apagar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Confirm>
        )}
      </PageContent>
    </PageContainer>
  );
}
