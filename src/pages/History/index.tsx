import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cyles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cyles.map((cyle) => {
              return (
                <tr key={cyle.id}>
                  <td>{cyle.task}</td>
                  <td>{cyle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cyle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cyle.finishedDate && (
                      <Status statusColor="green">Concluido</Status>
                    )}
                    {cyle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cyle.finishedDate && !cyle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
