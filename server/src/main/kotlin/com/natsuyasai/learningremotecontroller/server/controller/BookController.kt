package com.natsuyasai.learningremotecontroller.server.controller

import com.natsuyasai.learningremotecontroller.server.datamodel.Author
import com.natsuyasai.learningremotecontroller.server.datamodel.Book
import com.natsuyasai.learningremotecontroller.server.repository.AuthorRepository
import com.natsuyasai.learningremotecontroller.server.repository.BookRepository
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.graphql.data.method.annotation.SchemaMapping
import org.springframework.stereotype.Controller

@Controller
class BookController(private val bookRepository: BookRepository, private val authorRepository: AuthorRepository) {
    @QueryMapping
    fun bookById(@Argument id: String?): Book? {
        return (if (id == null) null else bookRepository.getById(id))
    }

    @SchemaMapping
    fun author(book: Book): Author? {
        return authorRepository.getById(book.authorId)
    }
}
