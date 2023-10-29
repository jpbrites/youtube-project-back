"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRepository = void 0;
const mysql_1 = require("../../../mysql");
const uuid_1 = require("uuid");
//SERÁ RESPONSAVEL POR TODAS AS OPERAÇÕES EM BANCO DE DADOS
class VideoRepository {
    create(request, response) {
        const { title, description, user_id } = request.body;
        mysql_1.pool.getConnection((err, connection) => {
            if (err) {
                return response.status(500).json(err);
            }
            connection.query('INSERT INTO videos (video_id, user_id, title, description) VALUES (?,?,?,?)', [(0, uuid_1.v4)(), user_id, title, description], (error, result, fileds) => {
                connection.release();
                if (error) {
                    response.status(400).json(error);
                }
                response.status(200).json({ message: "Video criado com sucesso!" });
            });
        });
    }
    getVideos(request, response) {
        const { user_id } = request.body;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE user_id = ?', [user_id], (error, results, fileds) => {
                connection.release();
                if (error) {
                    response.status(400).json({ error: "Erro ao buscar os vídeos" });
                }
                return response.status(200).json({ message: "Vídeos retornados com sucesso", videos: results });
            });
        });
    }
    searchVideos(request, response) {
        const { search } = request.query;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE title LIKE ?', [`%${search}%`], (error, results, fileds) => {
                connection.release();
                if (error) {
                    response.status(400).json({ error: "Erro ao buscar os vídeos" });
                }
                return response.status(200).json({ message: "Vídeos retornados com sucesso", videos: results });
            });
        });
    }
}
exports.VideoRepository = VideoRepository;
